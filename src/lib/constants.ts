export const BASE_URL = process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_VERCEL_URL ? `https://sokuressan.vercel.app` : 'https://sokuressan.com'
    : 'http://localhost:3000';

export const APP_NAME = '即レスさん';
export const X_CREATOR = '@tm_taiyo';
