import { DefaultButton } from '../DefaultButton/DefaultButton'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { clearFields, setVariantCell } from '../../redux/slices/ticketSlice'
import { CellVariant, FieldNum } from '../../types/types'

export const FieldButtom = ({
	index,
	variant = 'default',
	className,
	fieldNum = 'first',
}: {
	index: number
	variant?: CellVariant
	className?: string
	fieldNum?: FieldNum
}) => {
	const gameStage = useAppSelector(state => state.ticket.gameStage)

	const dispatch = useAppDispatch()

	const handleClickButton = () => {
		gameStage !== 'select' && dispatch(clearFields())
		dispatch(setVariantCell({ index: index - 1, fieldNum }))
	}

	return (
		<DefaultButton
			variant={variant}
			className={className}
			handleClickButton={handleClickButton}
		>
			<p>{index}</p>
		</DefaultButton>
	)
}
