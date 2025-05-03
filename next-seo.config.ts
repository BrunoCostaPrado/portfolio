import type { DefaultSeoProps } from "next-seo"

const config: DefaultSeoProps = {
	title: "Portfolio",
	description: "Portfolio created using create-t3-app",
	additionalLinkTags: [{ rel: "icon", href: "/portfolio.svg" }],
	openGraph: {
		type: "website",
		locale: "en_US",
		site_name: "Portfolio",
	},
	twitter: {
		cardType: "summary_large_image",
	},
}

export default config
