import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactCompiler: false,
    poweredByHeader: false,
    images: {
        unoptimized: true,
    },
    compress: true,
    experimental: {
        optimizePackageImports: ['@fortawesome/react-fontawesome'],
    },
    // Turbo pack yêu cầu root, nhưng hãy cẩn thận với đường dẫn nếu build lỗi
    turbopack: {
        root: __dirname,
    },
    // Thêm cấu hình bỏ qua lỗi ESLint vào đây
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
