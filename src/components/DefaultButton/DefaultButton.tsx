import { ReactNode } from 'react'
import classNames from 'classnames'

export const DefaultButton = ({
	handleClickButton,
	className,
	children,
}: {
	handleClickButton: () => void
	className?: string
	children?: ReactNode
}) => {
	const defaultButtonClass = classNames('defaultButton', className)

	return (
		<button className={defaultButtonClass} onClick={handleClickButton}>
			{children}
		</button>
	)
}
