export const getDelay = (ms: number) =>
	new Promise(resolve => setTimeout(resolve, ms))
