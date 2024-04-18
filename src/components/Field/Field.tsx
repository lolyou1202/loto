import { FieldCells } from '../../redux/slices/ticketSlice'
import { FieldButtom } from '../FieldButton/FieldButtom'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { Check } from '../icons/Check'

export const Field = ({
	name,
	fieldState,
	withProgressBar,
}: {
	name: string
	fieldState: FieldCells
	withProgressBar?: boolean
}) => {
	const selectedCells = fieldState.filter(
		cell => cell.isSelected || cell.isCoincide
	)

	return (
		<div className='ticket__field'>
			<div className='ticket__field-header'>
				<p className='ticket__field-name'>{name}</p>
				{withProgressBar && selectedCells.length < 8 && (
					<ProgressBar progress={selectedCells.length} length={8} />
				)}
				{selectedCells.length >= 8 && (
					<Check className='ticket__field-check' />
				)}
			</div>
			<div className='ticket__field-grid'>
				{fieldState.map(cell => (
					<FieldButtom key={cell.index} content={cell.index} />
				))}
				{!withProgressBar &&
					[...Array(17)].map((_, index) => <div key={index}></div>)}
			</div>
		</div>
	)
}
