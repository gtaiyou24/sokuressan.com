import GenerateMessageForm from "@/features/generate/generate-message-form";
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";


const ListMessageApp = () => {
    const messageServices = [
        { name: 'Gmail', icon: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico', href: "https://mail.google.com/" },
        { name: 'LinkedIn', icon: 'https://www.linkedin.com/favicon.ico', href: "https://www.linkedin.com/messaging/" },
        { name: 'Slack', icon: 'https://a.slack-edge.com/cebaa/img/ico/favicon.ico', href: "https://app.slack.com/client" },
        { name: 'Y!メール', icon: 'https://s.yimg.jp/images/mail/icon/favicon.ico', href: "https://mail.yahoo.co.jp" },
        { name: 'Wantedly', icon: '/app/wantedly.png', href: "https://www.wantedly.com/messages" },
        { name: 'Messenger', icon: 'https://static.xx.fbcdn.net/rsrc.php/ym/r/YQbyhl59TWY.ico', href: "https://www.messenger.com/" },
    ];
    return (
        <div className="w-full px-4">
            <h2 className="text-xl font-bold mb-2">メッセージアプリ</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">返信先のアプリ一覧です。クリックしたら各サービスのタブが開きます。</p>
            <ScrollArea className="w-80 sm:w-full whitespace-nowrap">
                <div className="flex w-max space-x-4 p-4">
                {messageServices.map((service) => (
                    <Link key={service.href} href={service.href} target="_blank">
                        <div className="flex flex-col items-center space-y-2 group shrink-0">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 transition-transform duration-300 ease-in-out group-hover:scale-110">
                                <Image
                                    src={service.icon}
                                    alt={`${service.name} icon`}
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <span className="text-xs text-center group-hover:font-semibold whitespace-nowrap">{service.name}</span>
                        </div>
                    </Link>
                ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
}

export default function HomePage() {
  return (
      <div className="flex flex-1 w-full flex-col items-center justify-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-3xl max-w-[708px] font-bold animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
          AI を使って返信文を生成
        </h1>

        <div className="max-w-xl w-full mt-10 animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
            <GenerateMessageForm />
            <ListMessageApp />
        </div>
      </div>
  );
}
