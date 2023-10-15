import { Link } from 'react-router-dom'

const Navbar = ({ cartCount }) => {
	return (
		<header>
			<nav className='flex justify-between max-w-7xl text-xl p-4 mx-auto'>
				<span>E-Commerce</span>
				<ul className='flex gap-12 items-center'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/shop'>Shop</Link>
					</li>
					<li>
						<Link to='/cart' data-testid='cart' className='relative'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='1em'
								viewBox='0 0 576 512'
								className='hover:fill-acc dark:fill-fg'
							>
								<path d='M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z' />
							</svg>
							<span className='pointer-events-none absolute bg-red-500 text-xs text-gray-50 rounded-full w-[16px] h-[16px] top-[0.7rem] left-[0.1rem]'>
								{cartCount}
							</span>
							<span className='plus-one hidden absolute p-0 m-0 text-base text-gray-50 text-center rounded-full w-[32px] h-[32px] top-0 left-[1rem]'>
								+1
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
