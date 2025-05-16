import { env } from "@/env"

function calculateAge(birthdate: Date): number {
	const today = new Date()
	const age = today.getFullYear() - birthdate.getFullYear()
	const monthDiff = today.getMonth() - birthdate.getMonth()

	if (
		monthDiff < 0 ||
		(monthDiff === 0 && today.getDate() < birthdate.getDate())
	) {
		return age - 1
	}

	return age
}

const birthdate = new Date(env.AGE)
export const age = calculateAge(birthdate)

function checkForUpdate(): void {
	const today = new Date()
	if (today.getDate() === 16) {
		console.log("Update day!")
	}
}

setInterval(checkForUpdate, 1000 * 60 * 60 * 24)


