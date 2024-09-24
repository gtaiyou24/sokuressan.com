import React from 'react';
import Link from "next/link";
import {Metadata} from "next";
import {APP_NAME} from "@/lib/constants";

export const metadata: Metadata = {
    title: '運営社情報',
    description: `${APP_NAME}の運営者情報です。運営者の詳細について記載しています。`,
};

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">運営者情報</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">運営者</h2>
                <p>
                    {APP_NAME}（以下、「当サイト」）は、個人運営のサービスです。当サイトは、ユーザーの皆様に安心してご利用いただけるよう、個人情報の保護に努めています。
                </p>
                <div className="mt-4">
                    <p><strong>氏名：</strong> 田村 大耀</p>
                    <p className="mt-2">
                        <strong>Xアカウント：</strong>
                        <a
                            href="https://x.com/tm_taiyo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline flex items-center inline-flex"
                        >
                            @tm_taiyo
                        </a>
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">サービス概要</h2>
                <p>
                    {APP_NAME}は、自炊する人のためのレシピからネットスーパーの食材を買うサービスです。
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
                <p>
                    {APP_NAME}に関するお問い合わせは、以下の方法でご連絡ください。
                </p>
                <p className="mt-2">
                    <strong>Xダイレクトメッセージ：</strong>
                    <Link
                        href="https://x.com/tm_taiyo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        @tm_taiyo
                    </Link>
                    にダイレクトメッセージをお送りください。
                </p>
                <p className="mt-2">
                    <strong>お問い合わせフォーム：</strong>
                    <Link href="https://forms.gle/skqwe6iUnA8LQ7146"
                          className="text-primary hover:underline"
                          target="_blank">
                        お問い合わせフォーム
                    </Link>
                    よりお問い合わせください。
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">プライバシーポリシー</h2>
                <p>
                    {APP_NAME}は、ユーザーの皆様のプライバシーを尊重し、個人情報の保護に努めています。
                    本プライバシーポリシーでは、当サイトの利用に関連して収集する個人情報の取り扱いについて説明します。
                    当サイトは日本の個人情報保護法を遵守し、適切に個人情報を管理いたします。
                </p>
                <p className="mt-4">
                    詳細なプライバシーポリシーは以下のリンクからご確認いただけます。
                </p>
                <a href="/privacy-policy" className="text-primary hover:underline mt-2 inline-block">
                    プライバシーポリシーを見る
                </a>
            </section>
        </div>
    );
};

export default About;