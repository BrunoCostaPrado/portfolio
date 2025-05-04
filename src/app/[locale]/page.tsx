"use server"
import AboutMe from "@/components/about/about"

import ProfileImage from "@/components/images/image"

export default async function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
				<ProfileImage />
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
					<AboutMe />
				</div>
			</div>
		</main>
	)
}
