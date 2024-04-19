export const Random = ({
	className,
	size = 24,
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
			viewBox='0 0 24 24'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
			/>
			<circle
				cx='12'
				cy='12'
				r='1'
				fill={stroke}
				stroke={stroke}
				strokeWidth={strokeWidth}
			/>
			<circle
				cx='18'
				cy='6'
				r='1'
				fill={stroke}
				stroke={stroke}
				strokeWidth={strokeWidth}
			/>
			<circle
				cx='6'
				cy='6'
				r='1'
				fill={stroke}
				stroke={stroke}
				strokeWidth={strokeWidth}
			/>
			<circle
				cx='6'
				cy='18'
				r='1'
				fill={stroke}
				stroke={stroke}
				strokeWidth={strokeWidth}
			/>
			<circle
				cx='18'
				cy='18'
				r='1'
				fill={stroke}
				stroke={stroke}
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
}
