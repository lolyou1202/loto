import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CellVariant, FieldNum } from '../../types/types'

export type FieldCells = {
	index: number
	variant: CellVariant
}[]

export type FieldState = {
	cells: FieldCells
	isCorrect: boolean
}

export interface InitialState {
	fieldsState: {
		first: FieldState
		second: FieldState
	}
}

const initialState: InitialState = {
	fieldsState: {
		first: {
			cells: [...Array(19)].map((_, index) => ({
				index: index + 1,
				variant: 'default',
			})),
			isCorrect: false,
		},
		second: {
			cells: [...Array(2)].map((_, index) => ({
				index: index + 1,
				variant: 'default',
			})),
			isCorrect: false,
		},
	},
}

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

			
		},
	},
})

export const { setVariantCell } = ticketSlice.actions
export default ticketSlice.reducer
