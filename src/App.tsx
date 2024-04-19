import { Field } from './components/Field/Field'
import { Functional } from './components/Functional/Functional'
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
					fieldNum='first'
					fieldState={fieldState.first}
				/>
				<Field
					name='Поле 2'
					fieldNum='second'
					fieldState={fieldState.second}
				/>
			</div>
			<Functional />
		</div>
	)
}

export default App
