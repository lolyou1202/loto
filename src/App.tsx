import { Header } from './components/Header/Header'

function App() {
	return (
		<div className='app'>
			<div className='ticket'>
				<Header />
				<p className='ticket-hint'>
					Выберите 8 чисел в первом поле и 1 число во втором поле
				</p>
				<div className='ticket__field'>
					<div className='ticket__field-header'>
						<p className='ticket__field-name'>Поле 1</p>
					</div>
				</div>
			</div>
			<div className='ticket__functional'>
				<div className='ticket__functional-random'></div>
				<div className='ticket__functional-play'></div>
			</div>
		</div>
	)
}

export default App
