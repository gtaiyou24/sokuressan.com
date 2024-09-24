import {z} from "zod";


export const GenerateSchema = z.object({
    message: z.string().min(1, {
        message: "相手のメッセージを入力してください。"
    }),
    reply: z.string().min(1, {
        message: "返信内容を入力してください。"
    })
});