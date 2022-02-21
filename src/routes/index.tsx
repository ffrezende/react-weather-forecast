import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from 'pages/app'

const RenderRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<App />} path="/" />
			</Routes>
		</BrowserRouter>
	)
}

export default RenderRoutes
