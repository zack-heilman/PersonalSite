const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    assetPrefix: isProd ? '/PersonalSite/' : '',
    reactStrictMode: true,
    images: {
        deviceSizes: [640, 768, 1024, 1280, 1536],
        loader: "custom",
        path: "/",
    },
};

module.exports = withPlugins(
    [
        [
            withPWA,
            {
                pwa: {
                    disable: process.env.NODE_ENV === "development",
                    dest: "public",
                    runtimeCaching,
                },
            },
        ],
    ],
    nextConfig
);
