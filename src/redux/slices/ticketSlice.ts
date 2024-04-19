import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CellVariant, FieldNum, GameStage } from '../../types/types'
import { getSelectedCells } from '../../hooks/getSelectedCells'
import { getRandomNums } from '../../hooks/getRandomNums'

export type FieldCells = {
	index: number
	variant: CellVariant
}[]

export type FieldState = {
	cells: FieldCells
	selectedCellsNum: number
	isCorrect: boolean
}

export interface InitialState {
	fieldsState: {
		first: FieldState
		second: FieldState
	}
	gameStage: GameStage
}

const initialState: InitialState = {
	fieldsState: {
		first: {
			cells: [...Array(19)].map((_, index) => ({
				index: index + 1,
				variant: 'default',
			})),
			selectedCellsNum: 0,
			isCorrect: false,
		},
		second: {
			cells: [...Array(2)].map((_, index) => ({
				index: index + 1,
				variant: 'default',
			})),
			selectedCellsNum: 0,
			isCorrect: false,
		},
	},
	gameStage: 'select',
}

//const fetchFieldsNums = createAsyncThunk(
//	'ticket/fetchFieldsNums',
//	async (
//		{ maxRetries, retryDelay }: { maxRetries: number; retryDelay: number },
//		{ rejectWithValue }
//	) => {
//		let retryCount = 0

//		try {
//			const response = await fetchData()
//			return response.data
//		} catch (error) {
//			while (retryCount < maxRetries) {
//				try {
//					await getDelay(retryDelay)
//					const response = await fetchData()
//					return response.data
//				} catch (err) {
//					retryCount++
//					if (retryCount >= maxRetries) {
//						return rejectWithValue({
//							message: 'Max retries reached',
//							error: err,
//						})
//					}
//				}
//			}
//		}
//	}
//)

export const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {
		setVariantCell: (
			state,
			{ payload }: PayloadAction<{ fieldNum: FieldNum; index: number }>
		) => {
			const { index, fieldNum } = payload

			const currentCell = state.fieldsState[fieldNum].cells[index]

			switch (currentCell.variant) {
				case 'default':
					currentCell.variant = 'selected'
					break
				case 'selected':
					currentCell.variant = 'default'
					break
			}

			switch (fieldNum) {
				case 'first':
					const selectedCellsField1 = getSelectedCells(
						state.fieldsState.first
					)
					state.fieldsState.first.selectedCellsNum =
						selectedCellsField1.length
					state.fieldsState.first.isCorrect =
						selectedCellsField1.length === 8
					break
				case 'second':
					const selectedCellsField2 = getSelectedCells(
						state.fieldsState.second
					)
					state.fieldsState.second.selectedCellsNum =
						selectedCellsField2.length
					state.fieldsState.second.isCorrect =
						selectedCellsField2.length === 1
					break
			}
		},
		clearFields: state => {
			const clearField = (fieldCells: FieldCells): FieldCells =>
				fieldCells.map(cell => ({
					...cell,
					variant: 'default',
				}))

			state.fieldsState = {
				first: {
					cells: clearField(state.fieldsState.first.cells),
					selectedCellsNum: 0,
					isCorrect: false,
				},
				second: {
					cells: clearField(state.fieldsState.second.cells),
					selectedCellsNum: 0,
					isCorrect: false,
				},
			}
			state.gameStage = 'select'
		},
		setRandom: state => {
			const randomNumsField1 = getRandomNums({
				min: 1,
				max: 19,
				numberRandom: 8,
			})
			const randomNumsField2 = getRandomNums({
				min: 1,
				max: 2,
				numberRandom: 1,
			})

			const randomCells = ({
				fieldCells,
				randomNums,
			}: {
				fieldCells: FieldCells
				randomNums: number[]
			}): FieldCells =>
				fieldCells.map(cell =>
					randomNums.includes(cell.index)
						? { ...cell, variant: 'selected' }
						: { ...cell, variant: 'default' }
				)

			state.gameStage = 'select'
			state.fieldsState.first = {
				cells: randomCells({
					fieldCells: state.fieldsState.first.cells,
					randomNums: randomNumsField1,
				}),
				isCorrect: true,
				selectedCellsNum: 8,
			}
			state.fieldsState.second = {
				cells: randomCells({
					fieldCells: state.fieldsState.second.cells,
					randomNums: randomNumsField2,
				}),
				isCorrect: true,
				selectedCellsNum: 1,
			}
		},
		compareTicket: state => {
			const randomNumsField1 = getRandomNums({
				min: 1,
				max: 19,
				numberRandom: 8,
			})
			const randomNumsField2 = getRandomNums({
				min: 1,
				max: 2,
				numberRandom: 1,
			})
			const field1Cells = [...state.fieldsState.first.cells]
			const field2Cells = [...state.fieldsState.second.cells]

			const compareCells = (
				fieldCells: FieldCells,
				randomNumsField: number[]
			): FieldCells =>
				fieldCells.map(cell => {
					if (randomNumsField.includes(cell.index)) {
						if (cell.variant === 'selected') {
							return { index: cell.index, variant: 'match' }
						} else {
							return { index: cell.index, variant: 'miss' }
						}
					} else {
						return cell
					}
				})

			state.fieldsState = {
				first: {
					...state.fieldsState.first,
					cells: compareCells(field1Cells, randomNumsField1),
				},
				second: {
					...state.fieldsState.second,
					cells: compareCells(field2Cells, randomNumsField2),
				},
			}

			const numMatchedCellsField1 = [
				...state.fieldsState.first.cells,
			].filter(cell => cell.variant === 'match').length
			const numMatchedCellsField2 = [
				...state.fieldsState.second.cells,
			].filter(cell => cell.variant === 'match').length

			if (
				numMatchedCellsField1 >= 4 ||
				(numMatchedCellsField1 === 3 && numMatchedCellsField2 === 1)
			) {
				state.gameStage = 'win'
			} else {
				state.gameStage = 'lose'
			}
		},
	},
})

export const { setVariantCell, clearFields, setRandom, compareTicket } =
	ticketSlice.actions
export default ticketSlice.reducer
