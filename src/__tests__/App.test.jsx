import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { vi } from 'vitest'
import App from '../App'
import { mockFetch } from '../__mocks__/mockFetch.js'

describe('App', () => {
	afterEach(cleanup)
	it('Should follow basic user interaction', async () => {
		//Create mock data
		const mockData = [
			{
				id: 0,
				title: 'PlayStation 5 Standard Edition',
				price: 499.99,
				image:
					'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2727&q=80',
				rating: { rate: 4.0, count: 999 },
			},
			{
				id: 1,
				title: 'Xbox Series X Standard Edition',
				price: 499.99,
				image:
					'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80',
				rating: { rate: 3.8, count: 1500 },
			},
		]
		//Intercept App.jsx's fetching to resolve with the mocked values instead of calling the fakeShop API.
		global.fetch = vi.fn()
		fetch.mockResolvedValue(mockFetch(mockData))
		const user = userEvent.setup()
		render(<App />, { wrapper: BrowserRouter })
		const link = screen.getByRole('link', { name: 'Shop' })
		expect(link).toBeInTheDocument()
		await user.click(link)
		await waitFor(() => {
			expect(screen.getByRole('heading', { name: 'Shop' })).toBeInTheDocument()
			expect(screen.getByTestId('card-0')).toBeInTheDocument()
		})
		await user.click(screen.getByTestId('card-0'))
		await user.click(screen.getByTestId('cart'))
		await waitFor(() => {
			expect(screen.getByRole('heading', { name: 'Cart' })).toBeInTheDocument()
			expect(screen.getByText(/PlayStation 5 Standard Edition/i)).toBeInTheDocument()
		})
	})
})
