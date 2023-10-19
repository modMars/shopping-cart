import { Link } from 'react-router-dom'

const Landing = () => {
	return (
		<>
			<section className='landing flex flex-col justify-center items-start min-w-full min-h-[80svh] leading-relaxed max-md:items-center'>
				<div className=''>
					{' '}
					<h1 className='text-fg drop-shadow-2xl text-left font-hero mb-4 font-extrabold tracking-wide leading-none 2xl:text-[10rem] max-2xl:text-[10rem] max-lg:text-[7rem] max-md:text-[5rem] max-sm:text-[3rem]'>
						DISCOVER<br></br>
						LOVE<br></br>
						<Link
							to='shop'
							className='transition-colors duration-300 underline decoration-2 underline-offset-[20px] hover:text-acc'
						>
							BUY<br></br>
						</Link>
					</h1>
				</div>
			</section>
			<div className='landing-bg'></div>
		</>
	)
}
export default Landing
