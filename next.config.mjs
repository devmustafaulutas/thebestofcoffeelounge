/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7,
    maximumRedirects: 1,
    maximumResponseBody: 5_000_000,
  },
}

export default nextConfig