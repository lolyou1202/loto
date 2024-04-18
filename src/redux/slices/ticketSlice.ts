import { createSlice } from '@reduxjs/toolkit'

export type FieldCells = {
	index: number
	isSelected: boolean
	isCoincide: boolean
	isMiss: boolean
}[]

export interface InitialState {
	fieldsState: {
		first: FieldCells
		second: FieldCells
	}
}

const initialState: InitialState = {
	fieldsState: {
		first: [...Array(19)].map((_, index) => ({
			index: index + 1,
			isSelected: false,
			isCoincide: false,
			isMiss: false,
		})),

		second: [...Array(2)].map((_, index) => ({
			index: index + 1,
			isSelected: false,
			isCoincide: false,
			isMiss: false,
		})),
	},
}

export const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {
		setCell: (state, { payload }) => {},
	},
})

export const {} = ticketSlice.actions
export default ticketSlice.reducer
