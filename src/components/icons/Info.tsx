export const Info = ({
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
				d='M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8 10V8'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8 6.0001V6'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
