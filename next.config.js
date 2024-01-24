/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
        return [
          {
            source: '/:store*',
            destination: '/localhost:3001', // The :path parameter isn't used here so will be automatically passed in the query
          },
        ]
      },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
    },

    
}
