export interface ChatMessage {
    role: "user" | "assistant" | "system";
    content: string;
}

export interface ChatResponse {
    id: string;
    object: string;
    model: string;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
    choices: { message: ChatMessage }[];
}

export interface ErrorResponse {
    status: number;
    error: {
        message: string;
        type: 'invalid_request_error' | '',
        param: null,
        code: 'invalid_api_key'
    }
}