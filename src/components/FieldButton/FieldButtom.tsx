import classNames from 'classnames'
import { DefaultButton } from '../DefaultButton/DefaultButton'
import { useAppDispatch } from '../../redux/hooks'
import { setVariantCell } from '../../redux/slices/ticketSlice'
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
	const dispatch = useAppDispatch()

	const defaultButtonClass = classNames(variant, className)

	const handleClickButton = () => {
		dispatch(setVariantCell({ index: index - 1, fieldNum }))
	}

	return (
		<DefaultButton
			className={defaultButtonClass}
			handleClickButton={handleClickButton}
		>
			<p>{index}</p>
		</DefaultButton>
	)
}
