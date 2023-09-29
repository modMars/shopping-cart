import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
	const error = useRouteError()
	console.error(error)
	return (
		<div className='flex flex-col justify-center min-h-full w-full absolute'>
			<h2 className='text-6xl'>Oops!</h2>
			<h3 className='text-3xl'>An unexpected error has occured.</h3>
			<p className='text-2xl'>{error.statusText || error.message}</p>
			<Link to='/' className='text-2xl'>
				Click here to return to the home page
			</Link>
		</div>
	)
}

export default ErrorPage
