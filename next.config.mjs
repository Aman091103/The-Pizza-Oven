/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '*.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'aman-food-ordering.s3.amazonaws.com',
            }
        ]
    },
    webpack: (config) => {
        // Remove any alias or unnecessary options that might cause issues
        return config;
      },
};

export default nextConfig;
