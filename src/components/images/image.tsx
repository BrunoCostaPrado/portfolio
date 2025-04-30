"use server"

import Image from "next/image"

// import Photo from "./Bruno Costa Prado.png"

const image =
	"https://gist.github.com/user-attachments/assets/f175bdbd-572c-4267-a26a-baa3a87fc65f"

export async function ProfileImage() {
	return (
		<div>
			<Image src={image} alt="alt" width={500} height={500} loading="lazy" />
		</div>
	)
}
