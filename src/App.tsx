import { Field } from './components/Field/Field'
import { Header } from './components/Header/Header'
import { useAppSelector } from './redux/hooks'

function App() {
	const fieldState = useAppSelector(state => state.ticket.fieldsState)

	return (
		<div className='app'>
			<div className='ticket'>
				<Header />
				<p className='ticket-hint'>
					Выберите 8 чисел в первом поле и 1 число во втором поле
				</p>
				<Field
					name='Поле 1'
					withProgressBar
					fieldState={fieldState.first}
				/>
				<Field name='Поле 2' fieldState={fieldState.second} />
			</div>
			{/*<div className='ticket__functional'>
				<div className='ticket__functional-random'></div>
				<div className='ticket__functional-play'></div>
			</div>*/}
		</div>
	)
}

export default App
