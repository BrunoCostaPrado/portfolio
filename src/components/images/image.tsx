"use server"

import Image, { type StaticImageData } from "next/image"

import Photo from "./Bruno Costa Prado.png"

export async function ProfileImage<StaticImageData>() {
	return (
		<div>
			<Image src={Photo} alt="alt" width={500} height={500} loading="lazy" />
		</div>
	)
}
