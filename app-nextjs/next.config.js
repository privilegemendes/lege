//Update styled-components to use SWC
/** @type {import('next').NextConfig} */

export const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
}