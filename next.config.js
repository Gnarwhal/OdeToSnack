const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	distDir: 'out/',
}

module.exports = createVanillaExtractPlugin(nextConfig)
