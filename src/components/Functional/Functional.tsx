import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
	clearFields,
	compareTicket,
	setRandom,
} from '../../redux/slices/ticketSlice'
import { DefaultButton } from '../DefaultButton/DefaultButton'
import { Random } from '../icons/Random'
import './Functional.style.scss'

export const Functional = () => {
	const fieldState = useAppSelector(state => state.ticket.fieldsState)
	const gameStage = useAppSelector(state => state.ticket.gameStage)

	const isCorrectFields =
		fieldState.first.isCorrect && fieldState.second.isCorrect

	const dispatch = useAppDispatch()

	const handleClickRandom = () => {
		dispatch(setRandom())
	}

	const handleClickCompare = () => {
		dispatch(compareTicket())
	}

	const handleClickRestart = () => {
		dispatch(clearFields())
	}

	return (
		<div className='ticket__functional'>
			<DefaultButton
				variant='selected'
				className='ticket__functional-random'
				handleClickButton={handleClickRandom}
			>
				<Random />
			</DefaultButton>
			<DefaultButton
				disabled={!isCorrectFields}
				variant={!isCorrectFields ? 'default' : 'selected'}
				className='ticket__functional-compare'
				handleClickButton={
					gameStage === 'select'
						? handleClickCompare
						: handleClickRestart
				}
			>
				<p>{gameStage === 'select' ? 'Проверить' : 'Играть заново'}</p>
			</DefaultButton>
		</div>
	)
}
