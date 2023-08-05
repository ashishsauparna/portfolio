/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.ashishsauparna.in',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    nextConfig
}
