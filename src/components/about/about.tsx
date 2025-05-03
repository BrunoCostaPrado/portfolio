import { age } from "@/lib/age"
import { getTranslations } from "next-intl/server"

const year = age
export default async function AboutMe() {
	const t = await getTranslations("About")
	return (
		<div>
			<div>{t("title")}</div>
			<div>{t("about")}</div>
			<p>Bruno Costa Prado</p>
			<div className="flex gap-2">
				<p>{year}</p>
				<p> {t("age")}</p>
			</div>
		</div>
	)
}
