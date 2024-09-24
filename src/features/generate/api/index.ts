import {ChatMessage, ChatResponse} from "@/features/generate/types";


export async function chatCompletion(messages: ChatMessage[], temperature: number = 0.1): Promise<ChatResponse> {
    const url = "https://api.openai.com/v1/chat/completions";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-4o-mini",
            messages: messages,
            temperature: temperature,
            n: 1,
        }),
    });

    if (response.ok) {
        return await response.json();
    }
    throw await response.json();
}