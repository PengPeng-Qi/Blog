import withMDX from "@next/mdx";
import { codeInspectorPlugin } from "code-inspector-plugin";

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(codeInspectorPlugin({ bundler: "webpack" }));
    return config;
  },
};

export default withMDXConfig(nextConfig);
