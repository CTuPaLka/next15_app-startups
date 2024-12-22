import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowSVG: true, // для исправления ошибки при импорте изображений
        remotePatterns: [
            {
                protocol: "https", // позволяет нексту обращаться к сторонним источникам
                hostname: "*"
            }
        ]
    },
    experimental: {
        ppr: "incremental",
    },
    devIndicators: {
        appIsrStatus: true,
        buildActivity: true,
        buildActivityPosition: "bottom-right"
    },
};

export default nextConfig;
