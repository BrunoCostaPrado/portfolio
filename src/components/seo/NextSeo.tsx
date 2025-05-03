"use server"

import { DefaultSeo } from "next-seo"
import SEO from "../../../next-seo.config"
export async function NextSeo() {
	return (
		<div>
			<DefaultSeo {...SEO} />
		</div>
	)
}
