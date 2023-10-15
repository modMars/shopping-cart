import { Link } from 'react-router-dom'

const ErrorPage = () => {
	return (
		<div className='flex flex-col justify-center min-h-full w-full absolute'>
			<h2 className='text-6xl mb-6'>Oops!</h2>
			<h3 className='text-3xl'>Page not found.</h3>
			<Link to='/' className='text-2xl'>
				Click here to return to the home page
			</Link>
		</div>
	)
}

export default ErrorPage
