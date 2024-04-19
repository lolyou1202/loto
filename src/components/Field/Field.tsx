import classNames from 'classnames'
import { FieldState } from '../../redux/slices/ticketSlice'
import { FieldNum } from '../../types/types'
import { FieldButtom } from '../FieldButton/FieldButtom'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { Check } from '../icons/Check'
import { Cross } from '../icons/Cross'
import './Field.style.scss'

export const Field = ({
	name,
	fieldState,
	fieldNum = 'first',
}: {
	name: string
	fieldState: FieldState
	fieldNum?: FieldNum
}) => {
	const { cells, isCorrect, selectedCellsNum } = fieldState

	const checkClass = classNames('ticket__field-check', {
		show: isCorrect,
	})

	const crossClass = classNames('ticket__field-cross', {
		show:
			(fieldNum === 'first' && !isCorrect && selectedCellsNum > 8) ||
			(fieldNum === 'second' && !isCorrect),
	})

	return (
		<div className='ticket__field'>
			<div className='ticket__field-header'>
				<p className='ticket__field-name'>{name}</p>
				<div>
					<Check className={checkClass} />
					<Cross className={crossClass} />
				</div>
				{fieldNum === 'first' && selectedCellsNum < 8 && (
					<ProgressBar progress={selectedCellsNum} length={8} />
				)}
			</div>
			<div className='ticket__field-grid'>
				{cells.map(cell => (
					<FieldButtom
						key={cell.index}
						index={cell.index}
						variant={cell.variant}
						fieldNum={fieldNum}
					/>
				))}
				{fieldNum === 'second' &&
					[...Array(17)].map((_, index) => <div key={index}></div>)}
			</div>
		</div>
	)
}
