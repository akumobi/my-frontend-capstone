/** @type {import('next').NextConfig} */
const nextConfig = {};
export const images = {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'cdn.prod.website-files.com',
            port: '',
            pathname: '/**',
        },
    ],
};
// export default nextConfig;
