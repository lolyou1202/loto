export const ProgressBar = ({
	progress,
	length,
}: {
	progress: number
	length: number
}) => {
	return (
		<div className='ticket__field-progressBar'>
			<div className='ticket__field-progressBar-list'>
				{[...Array(length)].map((_, index) => {
					return (
						<span
							key={index}
							className='ticket__field-progressBar-item'
						></span>
					)
				})}
			</div>
			<span
				className='ticket__field-progressBar-progress'
				style={{ width: `${(progress / length) * 100}%` }}
			></span>
		</div>
	)
}
