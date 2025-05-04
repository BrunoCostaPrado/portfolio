/** @type {import('next-sitemap').IConfig} */
export default {
	siteUrl: process.env.SITE_URL || "http://localhost:3000",
	generateRobotsTxt: true,
	sitemapSize: 7000,
	exclude: ["@/components/posthog/*"],
	alternateRefs: [
		{
			href: `${process.env.SITE_URL}/en/`,
			hreflang: "en",
		},
		{
			href: `${process.env.SITE_URL}/pt-br/`,
			hreflang: "pt-br",
		},
	],
}
