const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	}
}

const withVanillaExtract = createVanillaExtractPlugin()

module.exports = withVanillaExtract(nextConfig)
