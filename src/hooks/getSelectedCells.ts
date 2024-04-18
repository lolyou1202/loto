import { FieldState } from '../redux/slices/ticketSlice'

export const getSelectedCells = (fieldState: FieldState) =>
	fieldState.cells.filter(
		cell => cell.variant === 'selected' || cell.variant === 'coincide'
	)
