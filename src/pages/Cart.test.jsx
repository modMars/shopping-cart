import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Cart from './Cart'

const mockItems = [
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

const mockCart = [
	{ id: 1, count: 2 },
	{ id: 0, count: 5 },
]

describe('Cart', () => {
	it('Should render default page', () => {
		render(<Cart cart={[]} />, { wrapper: BrowserRouter })
		expect(screen.getByRole('heading', { name: 'Seems like there arent any items in your cart!' })).toBeInTheDocument()
	})
	it('Should render mocked cart', () => {
		render(<Cart items={mockItems} cart={mockCart} />, { wrapper: BrowserRouter })
		expect(screen.getByText(/playstation 5 standard edition/i)).toBeInTheDocument()
		expect(screen.getByText(/xbox series x standard edition/i)).toBeInTheDocument()
	})
})
