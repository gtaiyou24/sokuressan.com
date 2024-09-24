import React from 'react';
import { Metadata } from 'next';
import Link from "next/link";
import {APP_NAME} from "@/lib/constants";

export const metadata: Metadata = {
    title: 'プライバシーポリシー',
    description: `${APP_NAME}のプライバシーポリシーです。個人情報の取り扱い、クッキーの使用、第三者サービスの利用などについて詳しく説明しています。`,
};

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>

            <p className="mb-4">最終更新日: 2024年7月5日</p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. はじめに</h2>
                <p>{APP_NAME}（以下、「当サイト」）は、ユーザーの皆様のプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーでは、当サイトの利用に関連して収集する個人情報の取り扱いについて説明します。当サイトは日本の個人情報保護法を遵守し、適切に個人情報を管理いたします。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. 個人情報の定義</h2>
                <p>本ポリシーにおいて「個人情報」とは、個人情報保護法により定義される個人情報、すなわち、生存する個人に関する情報であって、次の各号のいずれかに該当するものをいいます。</p>
                <ol className="list-decimal pl-6 mt-2">
                    <li>当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む。）</li>
                    <li>個人識別符号が含まれるもの</li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. 個人情報の収集方法</h2>
                <p>当サイトは，ユーザーが利用登録をする際に氏名,生年月日,郵便番号,電話番号,メールアドレスなどの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. 個人情報の利用目的</h2>
                <p>収集した個人情報は、以下の目的で利用します：</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>当社サービスの提供・運営のため</li>
                    <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                    <li>ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                    <li>メンテナンス，重要なお知らせなど必要に応じたご連絡のため</li>
                    <li>利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため</li>
                    <li>ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため</li>
                    <li>有料サービスにおいて，ユーザーに利用料金を請求するため</li>
                    <li>上記の利用目的に付随する目的</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. クッキーとウェブビーコンの使用</h2>
                <p>当サイトでは、ユーザー体験の向上や利用状況の分析のために、クッキーとウェブビーコンを使用しています。</p>
                <h3 className="text-xl font-semibold mt-4 mb-2">5.1 クッキーとは</h3>
                <p>クッキーは、ウェブサイトがユーザーのコンピュータやモバイルデバイスに保存する小さなテキストファイルです。これにより、ユーザーの好みや設定を記憶し、サイトの利用をより便利にします。</p>
                <h3 className="text-xl font-semibold mt-4 mb-2">5.2 使用目的</h3>
                <ul className="list-disc pl-6 mt-2">
                    <li>ユーザー認証の維持</li>
                    <li>ユーザー設定の保存</li>
                    <li>サイトの利用状況の分析</li>
                    <li>広告の最適化</li>
                </ul>
                <h3 className="text-xl font-semibold mt-4 mb-2">5.3 クッキーの管理</h3>
                <p>ほとんどのウェブブラウザでは、クッキーの受け入れを制御したり、特定のクッキーを拒否したりすることができます。ただし、クッキーを無効にすると、当サイトの一部の機能が正常に動作しない場合があります。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. 個人情報の共有と第三者提供</h2>
                <p>当サイトは、以下の場合を除き、収集した個人情報を第三者と共有または提供しません：</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>ユーザーの同意がある場合</li>
                    <li>法令に基づく場合</li>
                    <li>業務委託先に対して、業務の遂行に必要な範囲内で個人情報を開示する場合（この場合、当該業務委託先に対して適切な管理を要求します）</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. 外部サービスの利用</h2>
                <h3 className="text-xl font-semibold mt-4 mb-2">7.1 Google Analytics</h3>
                <p>当サイトでは、Googleによるアクセス解析ツール「Google Analytics」を使用しています。Google
                    Analyticsはクッキーを使用し、個人を特定する情報を含まずにデータを収集します。収集されたデータは、当サイトの利用状況の分析と改善に役立てられます。</p>
                <h3 className="text-xl font-semibold mt-4 mb-2">7.2 Amazonアソシエイト・プログラム</h3>
                <p>当サイトは、amazon.co.jpを宣伝しリンクすることによって、サイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイト宣伝プログラムである「Amazonアソシエイト・プログラム」の参加者です。Amazonのアソシエイトとして、{APP_NAME}は適格販売により収入を得ています。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. SNS連携</h2>
                <p>当サイトでは、SNSアカウントを使用したログイン機能を提供しています。この機能を利用する場合、当該SNSの提供者から一定の個人情報の提供を受けます。これらの情報は、ユーザー認証と当サイトのサービス提供のために利用されます。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. データセキュリティ</h2>
                <p>当サイトは、個人情報の漏洩、損失、改ざんを防ぐため、以下のようなセキュリティ対策を講じています：</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>SSL（Secure Socket Layer）による通信の暗号化</li>
                    <li>アクセス制御によるデータへのアクセス制限</li>
                    <li>定期的なセキュリティ監査の実施</li>
                </ul>
                <p className="mt-2">ただし、インターネット上での完全なセキュリティを保証することはできません。ユーザーの皆様にも、パスワードの適切な管理などセキュリティへのご協力をお願いいたします。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. 個人情報の保管期間</h2>
                <p>当サイトは、収集した個人情報を、利用目的の達成に必要な期間保管します。ただし、法令等に従い保管期間が定められている場合は、この限りではありません。保管が不要となった個人情報は、速やかに且つ適切な方法で廃棄いたします。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. ユーザーの権利</h2>
                <p>ユーザーは、当サイトが保有する自身の個人情報について、以下の権利を有しています：</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>個人情報の開示請求</li>
                    <li>個人情報の訂正、追加、削除の請求</li>
                    <li>個人情報の利用停止、消去の請求</li>
                    <li>個人情報の第三者への提供の停止の請求</li>
                </ul>
                <p className="mt-2">これらの権利を行使する場合は、本ポリシー末尾に記載の連絡先までお問い合わせください。ご本人確認の上、速やかに対応いたします。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">12. プライバシーポリシーの変更</h2>
                <p>当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。重要な変更がある場合は、サイト上で通知するとともに、本ページの最終更新日を更新いたします。定期的に本ページをご確認いただくことをお勧めします。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">13. お問い合わせ</h2>
                <p>プライバシーに関するご質問やご懸念がある場合は、以下の連絡先までお問い合わせください：</p>
                <p className="mt-2">
                    URL: <Link href="https://forms.gle/skqwe6iUnA8LQ7146"
                               className="hover:text-primary transition-colors"
                               target="_blank">
                    https://forms.gle/skqwe6iUnA8LQ7146
                </Link>
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;