import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import ErrorPage from '../Components/ErrorPage'

const Router = () => {
	const router = createBrowserRouter([{ path: '/:name?', element: <App />, errorElement: <ErrorPage /> }])

	return <RouterProvider router={router} />
}

export default Router
