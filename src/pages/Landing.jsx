import { Link } from 'react-router-dom'
import img from '../assets/landing.png'

const Landing = () => {
	return (
		<>
			<section className='landing flex flex-col justify-center items-start min-w-full min-h-[91svh]'>
				<div className=''>
					{' '}
					<h1 className=' font-hero max-w-3xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
						unveil a world of shopping delights!
					</h1>
					<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
						From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their
						payment stack.
					</p>
					<button className='duration-200 transition-colors rounded-lg px-4 py-2 my-8 border border-fg hover:border-acc hover:text-fg'>
						<Link to='shop'>Go to shop</Link>
					</button>
				</div>
			</section>
			<div className='-z-10 absolute w-[60rem] right-0 top-32'>
				<img className='min-w-full' src={img} alt='' />
			</div>
		</>
	)
}
export default Landing
