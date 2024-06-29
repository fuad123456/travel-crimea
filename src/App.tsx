
import { Route, Routes } from 'react-router'
import './App.css'
import MainPage from './components/mainPage/MainPage.tsx'

function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</>
	)
}

export default App
