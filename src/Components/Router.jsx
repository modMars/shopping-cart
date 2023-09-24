import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './Cart'
import Landing from './Landing'
import Shop from './Shop'

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Landing />,
		},
		{
			path: 'shop',
			element: <Shop />,
		},
		{
			path: 'cart',
			element: <Cart />,
		},
	])

	return <RouterProvider router={router} />
}

export default Router
