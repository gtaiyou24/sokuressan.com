import {APP_NAME} from "@/lib/constants";
import Link from "next/link";
import Logo from "@/components/logo";

export default function Header() {
    return (
        <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
            <Link href="/" className="flex space-x-3">
                <Logo src={{dark: "/logo-dark.png", light: "/logo-light.png"}} alt={APP_NAME} width={40} height={40} />
                <h1 className="sm:text-3xl text-2xl font-bold ml-2 tracking-tight">
                    {APP_NAME}
                </h1>
            </Link>

            {/*<ThemeToggle />*/}
        </header>
    );
}