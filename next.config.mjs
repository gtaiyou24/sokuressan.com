/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },  // 外部サイトの画像URLを表示
        ],
    }
};

export default nextConfig;
