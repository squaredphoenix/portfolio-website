import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    output: "export", // This generates the 'out' folder for the Action to upload
    basePath: "/portfolio-website", // MUST match your repository name exactly
    assetPrefix: "/portfolio-website", // Ensures CSS/JS load from the correct path
    images: {
        unoptimized: true, // Required for static exports on GitHub Pages
    },
};

export default nextConfig;
