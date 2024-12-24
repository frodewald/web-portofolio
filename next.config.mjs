import { resolve } from 'path'; // Import dengan menggunakan ES6 syntax

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Aktifkan Strict Mode React
  transpilePackages: ['three'], // Pastikan tiga.js dapat ditranspil
  swcMinify: true, // Gunakan SWC untuk minifikasi (masih tersedia di Next.js 14)
  typescript: {
    ignoreBuildErrors: true, // Abaikan error TypeScript saat build
  },
  eslint: {
    ignoreDuringBuilds: true, // Abaikan error ESLint saat build
  },
  webpack: (config, { isServer }) => {
    // Tambahkan loader untuk file tertentu jika diperlukan
    config.module.rules.push({
      test: /\.(glb|gltf|hdr|fbx|obj|mtl)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/assets/models/',
            publicPath: '/_next/static/assets/models/',
          },
        },
      ],
    });

    // Fix alias untuk three.js (opsional, hanya jika error muncul)
    if (!isServer) {
      config.resolve.alias.three = resolve('./node_modules/three'); // Gunakan `import` dan `resolve`
    }

    return config;
  },
};

export default nextConfig;