/** @type {import('next').NextConfig} */
const nextConfig = {
  // 404 페이지 관련 오류를 방지하기 위한 설정
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 정적 내보내기 시 404 페이지 생성 방지
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
