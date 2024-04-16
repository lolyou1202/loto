import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface CounterState {
	value: number
	status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
	value: 0,
	status: 'idle',
}

export const incrementAsync = createAsyncThunk(
	'counter/fetchCount',
	async (amount: number) => {
		
	}
)

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {}
})

export const { } = counterSlice.actions
export default counterSlice.reducer
