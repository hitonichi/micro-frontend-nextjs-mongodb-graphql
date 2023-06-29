const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "main",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            fe1: `fe1@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
            childReact: `childReact@http://localhost:3002/remoteEntry.js`,
          },
          shared: [
            // {
            //   react: {},
            // },
            // {
            //   "react-dom": {
            //     eager: true,
            //     singleton: true,
            //     requiredVersion: false,
            //   },
            // },
          ],
          extraOptions: {
            exposePages: true,
          },
        })
      );
    }
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

module.exports = nextConfig;
