/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
        ],
    },

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
            })
        );
        return config;
    },
};
module.exports = nextConfig;
