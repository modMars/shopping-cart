import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Landing from './Landing'

describe('Landing', () => {
	it('Should render landing page', () => {
		render(<Landing />, { wrapper: BrowserRouter })
		expect(screen.getByRole('heading', { name: 'unveil a world of shopping delights!' })).toBeInTheDocument()
	})
	it(`Should render a button with the text 'Go to shop'`, () => {
		render(<Landing />, { wrapper: BrowserRouter })
		const button = screen.getByRole('link', { name: 'Go to shop' })
		expect(button).toBeInTheDocument()
	})
	it('Should render the shop when clicking on the button', () => {
		const user = userEvent.setup()
		render(<Landing />, { wrapper: BrowserRouter })
	})
})
