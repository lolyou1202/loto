import classNames from 'classnames'
import { useState } from 'react'
import { DefaultButton } from '../DefaultButton/DefaultButton'

export const FieldButtom = ({
	variant = 'inactive',
	content,
	className,
}: {
	variant?: 'active' | 'inactive'
	content: string | number
	className?: string
}) => {
	const [variantState, setVariantState] = useState(variant)

	const defaultButtonClass = classNames(variantState, className)

	const handleClickButton = () => {
		switch (variantState) {
			case 'active':
				setVariantState('inactive')
				break
			case 'inactive':
				setVariantState('active')
				break
		}
	}

	return (
		<DefaultButton
			className={defaultButtonClass}
			handleClickButton={handleClickButton}
		>
			<p>{content}</p>
		</DefaultButton>
	)
}
