import { ReactNode } from 'react'
import classNames from 'classnames'
import { CellVariant } from '../../types/types'
import './DefaultButton.style.scss'

export const DefaultButton = ({
	variant = 'default',
	handleClickButton,
	className,
	disabled,
	children,
}: {
	variant?: CellVariant
	handleClickButton: () => void
	className?: string
	disabled?: boolean
	children?: ReactNode
}) => {
	const defaultButtonClass = classNames(className, variant, 'defaultButton')

	return (
		<button
			disabled={disabled}
			className={defaultButtonClass}
			onClick={handleClickButton}
		>
			{children}
		</button>
	)
}
