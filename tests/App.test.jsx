import { render, screen } from '@testing-library/react'
import Landing from '../src/Components/Landing'
import Shop from '../src/Components/Shop'
// import App from '/App'

describe('Landing', () => {
	it('renders landing', () => {
		render(<Landing title='React' />)

		screen.debug()

		// check if App components renders headline
	})
})

describe('Shop', () => {
	it('renders headline', () => {
		render(<Shop title='React' />)

		screen.debug()

		// check if App components renders headline
	})
})
