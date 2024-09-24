'use client'

import { ReactNode } from 'react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {TooltipProvider} from "@/components/ui/tooltip";
import {ThemeProvider} from "next-themes";

export default function Provider({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient();
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TooltipProvider>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </TooltipProvider>
        </ThemeProvider>
    );
}