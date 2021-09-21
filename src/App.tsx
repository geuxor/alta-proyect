import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/routes'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './Components/Navigation/Navbar'
import { ToastContainer } from 'react-toastify'
import './App.css'

function App(): JSX.Element {
	return (
		<>
			<div className="App">
				<Router>
					<NavBar />
					<Routes />
					<ToastContainer
						position="bottom-center"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</Router>
			</div>
		</>
	)
}

export default App
