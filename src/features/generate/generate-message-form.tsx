"use client";

import {Badge} from "@/components/ui/badge";
import {useCallback, useRef, useState, useTransition} from "react";
import {GenerateSchema} from "@/features/generate/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {generate} from "@/features/generate/generate";
import {toast} from "@/hooks/use-toast";
import {ToastAction} from "@/components/ui/toast";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {FormError} from "@/components/form/form-error";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea"
import {cn} from "@/lib/utils";
import styles from "./styles.module.css";
import Loading from "@/components/loading";


export default function GenerateMessageForm() {
    const generatedMessageRef = useRef<null | HTMLDivElement>(null);
    const [error, setError] = useState<string | undefined>("");
    const [generatedMessage, setGeneratedMessage] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof GenerateSchema>>({
        resolver: zodResolver(GenerateSchema),
        defaultValues: {
            message: "",
            reply: "",
        },
    });

    const scrollToGeneratedMessage = () => {
        if (generatedMessageRef.current !== null) {
            generatedMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const onSubmit = (values: z.infer<typeof GenerateSchema>) => {
        setError("");

        startTransition(() => {
            generate(values)
                .then((data) => {
                    if (data?.error) {
                        setError(data.error);
                    } else {
                        setGeneratedMessage(data.success);
                        scrollToGeneratedMessage();
                    }
                })
                .catch((reason) => {
                    toast({
                        variant: "destructive",
                        title: "エラーが発生しました",
                        description: `${reason.message}`,
                        action: <ToastAction altText="閉じる">閉じる</ToastAction>,
                    });
                })
        });
    };

    const reset = useCallback(() => {
        form.reset();
        setGeneratedMessage("");
    }, [form, generatedMessage]);
    const clipCopy = () => {
        navigator.clipboard.writeText(generatedMessage ?? "");
        toast({
            description: "コピーしました"
        });
    }

    return (
        <div className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8 mb-8">
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="grid gap-2">
                                <FormLabel htmlFor="message" className="flex gap-2 items-center">
                                    <Badge>1</Badge>
                                    <p className="text-left text-lg">
                                        相手のメッセージを入力
                                    </p>
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        id="message"
                                        rows={4}
                                        disabled={isPending}
                                        onBlur={(e) => {
                                            field.onBlur();
                                            form.setValue('message', e.target.value);
                                        }}
                                        placeholder="山田様。お世話になっております。〇〇です。面接日程ですが、以下の日程ですといかがでしょうか。..."
                                        className="w-full rounded-md border shadow-sm focus:border-black focus:ring-black p-4"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="reply"
                        render={({ field }) => (
                            <FormItem className="grid gap-2">
                                <FormLabel htmlFor="message" className="flex gap-2 items-center">
                                    <Badge>2</Badge>
                                    <p className="text-left text-lg">
                                        返信内容を入力
                                    </p>
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        id="reply"
                                        rows={4}
                                        disabled={isPending}
                                        onBlur={(e) => {
                                            field.onBlur();
                                            form.setValue('reply', e.target.value);
                                        }}
                                        placeholder="例) 9月12日の10時でお願い"
                                        className="w-full rounded-md border shadow-sm focus:border-black focus:ring-black p-4"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormError message={error} />

                    <ul className={cn(styles.annotation, "text-sm text-left list-inside list-none leading-tight tracking-tight")}>
                        <li>※返信内容と異なる返信文が生成されることがあるため、生成された返信文の内容を必ずご確認ください。</li>
                        <li>※当サイトでは、入力されたメッセージや返信内容、生成された返信文を保存しておりません。</li>
                    </ul>

                    <div className="flex flex-col-reverse sm:flex-row gap-4 w-full">
                        <Button variant="secondary" onClick={() => reset()} disabled={isPending} className="w-full font-bold">
                            リセット
                        </Button>
                        <Button type="submit" disabled={isPending} className="w-full gap-1 font-bold">
                            {isPending && <Loading />}
                            返信文を生成する
                        </Button>
                    </div>
                </form>
            </Form>

            {generatedMessage && (
                <Card className="w-full mx-auto" ref={generatedMessageRef}>
                    <CardHeader>
                        <CardTitle className="text-left">生成された返信文</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className={cn(styles.text, "leading-tight tracking-tight")}>
                            {generatedMessage}
                        </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button onClick={() => reset()} variant="outline">閉じる</Button>
                        <Button onClick={clipCopy}>コピー</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}