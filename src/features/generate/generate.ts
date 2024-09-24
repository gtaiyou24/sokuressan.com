"use server";

import {z} from "zod";
import {GenerateSchema} from "@/features/generate/schema";
import {chatCompletion} from "@/features/generate/api";
import {ChatMessage} from "@/features/generate/types";

export const generate = async (values: z.infer<typeof GenerateSchema>): Promise<{ error?: string; success?: string; }> => {
    const validatedFields = GenerateSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: validatedFields.error.message };
    }

    const { message, reply } = validatedFields.data;
    const systemMessage: ChatMessage = {
        role: "system",
        content: `あなたは優秀なビジネスマンです。以下の文章は相手から送られたメッセージです。以下の文章をもとに適切な返信文を出力してください。
        ただし、出力するテキストはコピーしやすいようにするため返信文のみとします。
        ${message}
        `,
    };
    const userMessage: ChatMessage = {
        role: "user",
        content: reply
    }
    return await chatCompletion([systemMessage, userMessage])
        .then((data) => {
            return {success: data.choices[0].message.content};
        })
        .catch((reason) => {
            console.log(reason);
            throw new Error("エラーが発生しました。しばらくお待ちください。")
        });
}