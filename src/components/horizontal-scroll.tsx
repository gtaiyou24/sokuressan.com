import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function HorizontalScroll(props: React.ComponentProps<'div'>) {
    return (
        <ScrollArea className={`w-full overflow-x-scroll whitespace-nowrap ${props.className}`}>
            <div className="flex space-x-4 pb-4">
                {props.children}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}

export default HorizontalScroll;