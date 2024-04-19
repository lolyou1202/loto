export const getRandomNums = ({
	min,
	max,
	numberRandom,
}: {
	min: number
	max: number
	numberRandom: number
}) => {
	let numbersSet = new Set<number>()

	while (numbersSet.size < numberRandom)
		numbersSet.add(Math.floor(Math.random() * (max - min + 1)) + min)

	return Array.from(numbersSet)
}
