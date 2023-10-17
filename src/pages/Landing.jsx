import { Link } from 'react-router-dom'
import bg from '../assets/bg.jpg'
import img from '../assets/landing.webp'

const Landing = () => {
	return (
		<>
			<section className='landing flex flex-col justify-center items-start min-w-full min-h-[91svh] leading-relaxed'>
				<div className=''>
					{' '}
					<h1 className='text-fg drop-shadow-2xl shadow-black text-left font-hero max-w-3xl mb-4 font-extrabold tracking-wide leading-none sm:text-[5rem] md:text-[8rem] xl:text-[10rem]'>
						DISCOVER<br></br>
						LOVE<br></br>
						<Link
							to='shop'
							className='transition-colors duration-300 underline decoration-2 decoration-wavy underline-offset-[20px] hover:text-acc'
						>
							BUY<br></br>
						</Link>
					</h1>
				</div>
			</section>
			<div
				className='-z-10 fixed top-0 left-0 w-screen h-screen'
				style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', filter: 'blur(5px) brightness(0.6)' }}
			></div>
		</>
	)
}
export default Landing
