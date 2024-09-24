import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {APP_NAME} from "@/lib/constants";

export const metadata: Metadata = {
    title: '利用規約',
    description: `${APP_NAME}の利用規約です。サービスの利用条件、ユーザーの権利と義務、免責事項などを定めています。`,
};

const TermsOfService = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">利用規約</h1>

            <p className="mb-4">最終更新日: 2024年7月5日</p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. 適用</h2>
                <p>本規約は、{APP_NAME}（以下「当サイト」といいます。）の利用に関する条件を、当サイトの利用者（以下「ユーザー」といいます。）と当サイトの運営者（以下「運営者」といいます。）との間で定めるものです。ユーザーは、本規約に同意の上、当サイトを利用するものとします。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. 定義</h2>
                <p>本規約において使用する用語の定義は、次の各号に定めるとおりとします。</p>
                <ol className="list-decimal pl-6 mt-2">
                    <li>「サービス」とは、当サイトが提供する全てのサービスを意味します。</li>
                    <li>「コンテンツ」とは、文章、画像、動画等の情報を意味します。</li>
                    <li>「投稿」とは、ユーザーが当サイトに掲載するコンテンツを意味します。</li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. 規約の変更</h2>
                <p>運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の規約は、当サイトに掲載された時点から効力を生じるものとし、ユーザーは変更後の規約に従うものとします。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. 利用登録</h2>
                <p>当サイトの利用を希望する者は、運営者の定める方法によって利用登録を申請し、運営者がこれを承認することによって、当サイトの利用登録をすることができます。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. ユーザーIDおよびパスワードの管理</h2>
                <p>ユーザーは、自己の責任において、当サイトのユーザーIDおよびパスワードを管理するものとします。ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与することはできません。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. サービスの提供と変更</h2>
                <ol className="list-decimal pl-6 mt-2">
                    <li>当サイトは、ユーザーに対して、レシピ検索、買い物リスト作成、食材購入支援等のサービスを提供します。</li>
                    <li>運営者は、ユーザーに通知することなく、サービスの内容を変更し、または提供を停止することができるものとします。</li>
                    <li>運営者は、サービスの提供の停止、変更、終了によってユーザーに生じた損害について、一切の責任を負いません。</li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. 料金および支払方法</h2>
                <ol className="list-decimal pl-6 mt-2">
                    <li>当サイトは、現在無料でサービスを提供していますが、将来的に有料サービスを導入する可能性があります。</li>
                    <li>有料サービスを導入する場合、料金、支払方法、利用条件等については別途定めるものとし、ユーザーはこれに同意の上で有料サービスを利用するものとします。</li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. 禁止事項</h2>
                <p>ユーザーは、当サイトの利用にあたり、以下の行為をしてはなりません。</p>
                <ol className="list-decimal pl-6 mt-2">
                    <li>法令または公序良俗に違反する行為</li>
                    <li>犯罪行為に関連する行為</li>
                    <li>運営者、他のユーザー、またはその他第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                    <li>当サイトの運営を妨害するおそれのある行為</li>
                    <li>不正アクセスをし、またはこれを試みる行為</li>
                    <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                    <li>不正な目的を持って当サイトを利用する行為</li>
                    <li>当サイトの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
                    <li>他のユーザーに成りすます行為</li>
                    <li>運営者が許可しない当サイト上での営業、宣伝、広告、勧誘、または営業行為</li>
                    <li>面識のない異性との出会いを目的とした行為</li>
                    <li>運営者が不適切と判断する行為</li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. 投稿コンテンツの取り扱い</h2>
                <ol className="list-decimal pl-6 mt-2">
                    <li>ユーザーは、投稿コンテンツについて、自らが投稿その他送信することについての適法な権利を有していること、および投稿コンテンツが第三者の権利を侵害していないことについて、運営者に対し表明し、保証するものとします。</li>
                    <li>ユーザーは、投稿コンテンツについて、運営者に対し、世界的、非独占的、無償、サブライセンス可能かつ譲渡可能な使用、複製、配布、派生著作物の作成、表示および実行に関するライセンスを付与します。</li>
                    <li>運営者は、投稿コンテンツについて、違法または不適切な内容があると判断した場合、予告なく削除その他の措置を取ることができるものとします。</li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Amazonアソシエイトプログラム</h2>
                <ol className="list-decimal pl-6 mt-2">
                    <li>当サイトは、Amazonアソシエイトプログラムの参加者です。当サイトを通じてAmazonで商品を購入する場合、当サイトは適格販売により収入を得る場合があります。</li>
                    <li>ユーザーがAmazonで商品を購入する際の取引は、Amazonと直接行われるものであり、当サイトは商品の販売、配送、品質等について一切の責任を負いません。</li>
                    <li>商品の購入に関するお問い合わせは、直接Amazonにお願いいたします。</li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. 知的財産権</h2>
                <ol className="list-decimal pl-6 mt-2">
                    <li>当サイトに掲載されているコンテンツ（文章、画像、動画、プログラム等）の著作権、商標権その他の知的財産権は、運営者または正当な権利者に帰属します。</li>
                    <li>ユーザーは、当サイトのコンテンツを、運営者の事前の書面による承諾なく、複製、送信、譲渡、貸与、翻訳、翻案、転載、再配布等することはできません。</li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">12. 免責事項</h2>
                <ol className="list-decimal pl-6 mt-2">
                    <li>運営者は、当サイトの内容の正確性、完全性、最新性、有用性等について、いかなる保証も行わないものとします。</li>
                    <li>運営者は、当サイトに掲載されているレシピや食材情報の正確性、安全性について一切の責任を負いません。ユーザーは、自己の責任においてこれらの情報を利用するものとします。</li>
                    <li>運営者は、当サイトの利用によってユーザーに生じたいかなる損害についても、一切の責任を負いません。</li>
                    <li>運営者は、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">13. サービス内容の変更等</h2>
                <p>運営者は、ユーザーに通知することなく、当サイトの内容を変更しまたは当サイトの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">14. 利用規約の変更</h2>
                <p>運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、当サイトの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">15. 個人情報の取扱い</h2>
                <p>当サイトの利用によって取得する個人情報については、当サイトの「<Link href="/privacy-policy" className="text-primary hover:underline">プライバシーポリシー</Link>」に従い適切に取り扱うものとします。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">16. 通知または連絡</h2>
                <p>ユーザーと運営者との間の通知または連絡は、運営者の定める方法によって行うものとします。運営者は、ユーザーから、運営者が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">17. 権利義務の譲渡の禁止</h2>
                <p>ユーザーは、運営者の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">18. 準拠法・裁判管轄</h2>
                <ol className="list-decimal pl-6 mt-2">
                    <li>本規約の解釈にあたっては，日本法を準拠法とします。</li>
                    <li>本サイトに関して紛争が生じた場合には，運営者の所在地を管轄する裁判所を専属的合意管轄とします。</li>
                </ol>
            </section>
        </div>
    );
}

export default TermsOfService;