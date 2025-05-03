import "@/styles/globals.css"
import NavBar from "@/components/locale/NavBar"
import { PostHogProvider } from "@/components/posthog/provider"
import { ReactScan } from "@/components/react-component/ReactScanComponent"
import { env } from "@/env"
import { routing } from "@/i18n/routing"
import { geist } from "@/lib/fonts"
import { DevOnly } from "@redbruno/isdev"
import type { Metadata } from "next"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
export const metadata: Metadata = {
	title: "Portfolio",
	description: "Portfolio created using create-t3-app",
	icons: [{ rel: "icon", url: "/portfolio.svg" }],
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	// Ensure that the incoming `locale` is valid
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	return (
		<html lang={locale} className={`${geist.variable}`}>
			<head>
				<DevOnly isDev={env.NODE_ENV}>
					<ReactScan />
				</DevOnly>
			</head>
			<body>
				<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
					<PostHogProvider>
						<NextIntlClientProvider>
							<NavBar />
							{children}
						</NextIntlClientProvider>
					</PostHogProvider>
				</main>
			</body>
		</html>
	)
}
