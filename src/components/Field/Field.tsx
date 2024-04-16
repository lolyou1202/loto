export const Field = ({
	size,
	name,
}: {
	size: 'large' | 'small'
	name: string
}) => {
	return (
		<div className='ticket__field'>
			<div className='ticket__field-header'>
				<p className='ticket__field-name'>{name}</p>
			</div>
		</div>
	)
}
