import { Route, BrowserRouter } from 'react-router-dom'

import App from 'pages/app'

const Routes = () => {
	return (
		<BrowserRouter>
			<Route element={App} path="/" />
		</BrowserRouter>
	)
}

export default Routes
