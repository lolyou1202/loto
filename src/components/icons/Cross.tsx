export const Cross = ({
	className,
	size = 16,
	stroke,
	strokeWidth = 2,
	fill = 'none',
}: {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}) => {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox='0 0 16 16'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 12L8 8M8 8L12 4M8 8L12 12M8 8L4 4'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
