import Link from "next/link";
import Logo from "@/components/logo";
import {APP_NAME} from "@/lib/constants";


export default function Footer() {
    return (
        <footer className="w-full border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Logo
                            src={{dark: "/logo-dark.png", light: "/logo-light.png"}}
                            alt={APP_NAME}
                            width={40}
                            height={40}
                            className={"transition-all group-hover:scale-110"} />
                    </div>
                    <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                        <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                            プライバシーポリシー
                        </Link>
                        <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                            利用規約
                        </Link>
                        <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                            運営者情報
                        </Link>
                        <Link href="https://forms.gle/S4JCvxRH7P42FESN8"
                              className="text-muted-foreground hover:text-primary transition-colors"
                              target="_blank">
                            お問い合わせ
                        </Link>
                    </nav>
                </div>
                <div className="mt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}