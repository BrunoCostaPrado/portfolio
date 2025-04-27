import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ["en", "pt-br"],

	// Used when no locale matches
	defaultLocale: "en",
	pathnames: {
		"/": {
			en: "/",
			"pt-br": "/",
		},
		"/about": {
			en: "/about",
			"pt-br": "/sobre",
		},
		"/contact": {
			en: "/contact",
			"pt-br": "/contato",
		},
	},
})
export type Locale = (typeof routing.locales)[number]
export const { Link, redirect, usePathname, useRouter } =
	createNavigation(routing)
