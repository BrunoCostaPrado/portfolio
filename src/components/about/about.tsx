import { getTranslations } from "next-intl/server"

export default async function AboutMe() {
	const t = await getTranslations("About")
	return <div>{t("title")}</div>
}
