/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js"
import createNextIntlPlugin from "next-intl/plugin"

/** @type {import("next").NextConfig} */
const config = {
	experimental: {
		nextScriptWorkers: true,
	},
	trailingSlash: true,
	images: {
		minimumCacheTTL: 60, // 1 minute
		remotePatterns: [
			new URL(
				"https://gist.github.com/user-attachments/assets/f175bdbd-572c-4267-a26a-baa3a87fc65f"
			),
		],

		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},
	compress: true,
	cacheMaxMemorySize: 100,
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(config)
