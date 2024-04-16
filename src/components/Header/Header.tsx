import { Cross } from "../icons/Cross"
import { Info } from "../icons/Info"

export const Header = () => {
	return (
		<div className='ticket__header'>
			<div className='ticket__header-title'>
				<p className='ticket__header-title-text'>Заполните билет</p>
				<button className='ticket__header-title-info'>
					<Info strokeWidth={1} />
				</button>
			</div>
			<button className='ticket__header-cross'>
				<Cross />
			</button>
		</div>
	)
}
