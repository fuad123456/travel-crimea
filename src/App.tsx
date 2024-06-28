

import { Route, Routes } from 'react-router'
import './App.css'
import Ap from './components/Ap.tsx'

function App() {

  return (
    <>
	<Routes>
		<Route path="/" element={<Ap/>} />
	</Routes>
    </>
  )
}

export default App
