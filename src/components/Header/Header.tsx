import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { clearFields } from '../../redux/slices/ticketSlice'
import { Cross } from '../icons/Cross'
import { Info } from '../icons/Info'
import './Header.style.scss'

export const Header = () => {
	const fieldState = useAppSelector(state => state.ticket.fieldsState)

	const dispatch = useAppDispatch()

	const isSelectedSomething =
		fieldState.first.selectedCellsNum !== 0 ||
		fieldState.second.selectedCellsNum !== 0

	const handleClickCross = () => {
		dispatch(clearFields())
	}

	return (
		<div className='ticket__header'>
			<div className='ticket__header-title'>
				<p className='ticket__header-title-text'>Заполните билет</p>
				<button className='ticket__header-title-info'>
					<Info strokeWidth={1} />
				</button>
			</div>
			{isSelectedSomething && (
				<button
					className='ticket__header-cross'
					onClick={handleClickCross}
				>
					<Cross />
				</button>
			)}
		</div>
	)
}
