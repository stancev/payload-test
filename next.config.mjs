import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
