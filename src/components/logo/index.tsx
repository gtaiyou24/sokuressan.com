import Image from "next/image";


export default function Logo({
    src,
    alt,
    width,
    height,
    className
}: {
    src: {
        dark?: string;
        light?: string;
    },
    alt: string;
    width: number;
    height: number;
    className?: string;
}) {
    return (
        <div className={className}>
            {src.dark && <Image src={src.dark} className={"rounded-lg hidden dark:block"} alt={alt} width={width} height={height} />}
            {src.light && <Image src={src.light} className={"rounded-lg block dark:hidden"} alt={alt} width={width} height={height} />}
        </div>
    );
}