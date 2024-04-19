import { Field } from './components/Field/Field'
import { Functional } from './components/Functional/Functional'
import { Header } from './components/Header/Header'
import { useAppSelector } from './redux/hooks'

function App() {
	const fieldState = useAppSelector(state => state.ticket.fieldsState)
	const gameStage = useAppSelector(state => state.ticket.gameStage)

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
				{gameStage === 'win' && (
					<p className='ticket-hint'>
						Ура, вы выиграли! С такой удачей нужно идти в казино!
					</p>
				)}
				{gameStage === 'lose' && (
					<p className='ticket-hint'>
						Увы, вы проиграли! Потренируй удачу здесь, прежде чем
						проигрывать квартиру в казино!
					</p>
				)}
			</div>
			<Functional />
		</div>
	)
}

export default App
