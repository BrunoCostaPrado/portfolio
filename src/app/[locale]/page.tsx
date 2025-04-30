import { ProfileImage } from "@/components/images/image"
import { getTranslations } from "next-intl/server"

import Link from "next/link"

export default async function HomePage() {
	const t = await getTranslations("Home")

	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
				<ProfileImage />
				<h1 className="font-extrabold text-5xl text-white tracking-tight sm:text-[5rem]">
					{t("title1")}{" "}
					<span className="text-[hsl(280,100%,70%)]">{t("title2")}</span>{" "}
					{t("title3")}
				</h1>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
					<Link
						className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
						href="https://create.t3.gg/en/usage/first-steps"
						target="_blank"
					>
						<h2 className="font-bold text-2xl">{t("firstStep")}</h2>
						<div className="text-lg">{t("basic")}</div>
					</Link>
				</div>
			</div>
		</main>
	)
}
