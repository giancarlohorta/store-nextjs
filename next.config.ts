import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
  webpack(config) {
    interface Rule {
      test?: RegExp;
      issuer?: RegExp;
      use?: string[];
      exclude?: RegExp;
    }

    config.module.rules = config.module.rules.map((rule: Rule) => {
      if (rule.test && rule.test instanceof RegExp && rule.test.test(".svg")) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
