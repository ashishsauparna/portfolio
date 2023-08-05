/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://example.com',
    generateRobotsTxt: true,
    generateIndexSitemap,
    nextConfig
}
