import { render, screen } from '@testing-library/react'
import App from '.'

describe('renders learn react link', () => {
	it('App is rendering', () => {
		render(<App />)
		expect(screen.getByTestId('app-container')).toBeInTheDocument()
	})
})
