import { render, screen } from '@testing-library/react'
// import Landing from '../src/Components/Landing'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import App from '../src/App'
import Card from '../src/Components/Card'
import Cart from '../src/Components/Cart'
import Shop from '../src/Components/Shop'

describe('App', () => {
	test('renders app', () => {
		render(<App />, { wrapper: BrowserRouter })
		screen.debug()
	})

	describe('navigation', () => {
		test('Navigate to Shop', async () => {
			const user = userEvent.setup()
			render(<App />, { wrapper: BrowserRouter })
			expect(screen.getByRole('link', { name: 'Shop' })).toBeInTheDocument()
			const link = screen.getByRole('link', { name: 'Shop' })
			await user.click(link)
			expect(screen.getByRole('heading'), { name: 'Shop' }).toBeInTheDocument()
		})
		test('Navigate to Shop from button', async () => {
			const user = userEvent.setup()
			render(<App />, { wrapper: BrowserRouter })
			expect(screen.getByRole('link', { name: 'Go to shop' })).toBeInTheDocument()
			const link = screen.getByRole('link', { name: 'Shop' })
			await user.click(link)
			expect(screen.getByRole('heading'), { name: 'Shop' }).toBeInTheDocument()
		})
		test('Navigate to Cart', async () => {
			const user = userEvent.setup()
			render(<App />, { wrapper: BrowserRouter })
			const link = screen.getByTestId('cart')
			await user.click(link)
			expect(screen.getByRole('heading'), { name: 'Cart' }).toBeInTheDocument()
		})
	})
})

describe('Shop', () => {
	test('renders headline', () => {
		render(<Shop />, { wrapper: BrowserRouter })
		expect(screen.getByRole('heading', { name: 'Shop' })).toBeInTheDocument()
	})
})

describe('Cart', () => {
	test('renders headline', () => {
		render(<Cart />, { wrapper: BrowserRouter })
		expect(screen.getByRole('heading', { name: 'Cart' }).textContent).toMatch(/Cart/i)
	})
})

describe('Card', () => {
	test('Renders default card', () => {
		render(<Card />, { wrapper: BrowserRouter })
		expect(screen.getByRole('heading', { name: 'loremloremlor' })).toBeInTheDocument()
	})
})
