"use server"

import Image from "next/image"

const image =
	"https://gist.github.com/user-attachments/assets/f175bdbd-572c-4267-a26a-baa3a87fc65f"

const imageLoader = await image

export default async function ProfileImage() {
	return (
		<div>
			<Image
				src={imageLoader}
				alt="alt"
				width={500}
				height={500}
				loading="eager"
			/>
		</div>
	)
}
