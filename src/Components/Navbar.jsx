import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ cartCount }) => {
	//Set navbar state
	const [isMenuVisible, setMenuVisibility] = useState(true)

	const handleNavMenu = () => {
		if (window.innerWidth <= 768) {
			setMenuVisibility(!isMenuVisible)
		}
	}

	return (
		<header className='bg-bg pl-[calc(100vw-100%)]'>
			<figure className='py-4 max-w-screen-2xl flex justify-between bg-bg text-fg font-hero mx-auto'>
				<span className='px-12 text-acc text-2xl self-center'>Spiffo&apos;s</span>
				<nav className={`navMenu ${isMenuVisible ? 'open pointer-events-auto' : 'closed'}`}>
					<ul className='flex gap-12 items-center justify-between max-md:flex-col'>
						<li>
							<Link className='p-2 transition-colors hover:text-acc' to='/' onClick={handleNavMenu}>
								Home
							</Link>
						</li>
						<li>
							<Link className='p-2 transition-colors hover:text-acc' to='/shop' onClick={handleNavMenu}>
								Shop
							</Link>
						</li>
						<li>
							<Link to='/cart' data-testid='cart' className='relative' onClick={handleNavMenu}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='1em'
									viewBox='0 0 576 512'
									className='hover:fill-acc fill-fg transition-colors'
								>
									<path d='M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z' />
								</svg>
								<span className='text-center pointer-events-none font-regular absolute bg-red-500 text-xs text-gray-50 rounded-full w-[16px] h-[16px] top-[0.7rem] left-[0.1rem] max-md:w-[24px] max-md:h-[24px] max-md:text-[18px] max-md:top-[2rem] max-md:left-[0.5rem]'>
									<div className='flex items-center justify-center w-full h-full'>{cartCount}</div>
								</span>
							</Link>
						</li>
					</ul>
				</nav>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='1em'
					viewBox='0 0 448 512'
					className='mr-8 self-center fill-fg md:hidden'
					onClick={handleNavMenu}
				>
					<path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
				</svg>
			</figure>
		</header>
	)
}

export default Navbar
