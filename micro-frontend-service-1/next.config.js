const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "fe1",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./header": "./src/components/ExposedComponent",
            "./stringFormat": "./src/utils/stringFormat",
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
    return {
      ...config,
      experiments: {
        topLevelAwait: true,
        layers: true,
      },
    };
  },
};

module.exports = nextConfig;
