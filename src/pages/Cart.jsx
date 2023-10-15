import { Link } from 'react-router-dom'
import CartTotalSummary from '../Components/CartTotalSummary'

const Cart = ({ items, cart, total, handleCartAdd, handleCartSubstract, deleteFromCart }) => {
	return (
		<section className='max-w-7xl'>
			<h2>Cart</h2>
			{cart.length ? (
				cart.map(itemID => {
					const id = itemID.id
					const count = itemID.count

					return (
						<>
							<ul key={id} className='flex flex-col'>
								<li className='relative border border-pink-400 p-3 flex items-center'>
									<div className='p-2 bg-white rounded-xl'>
										<img src={items[id].image} className='w-[12rem] h-[12rem] object-contain' alt='' />
									</div>
									<div className='max-w-[320px] flex flex-col justify-center gap-4 items-center'>
										<span className='text-xl text-center'>{items[id].title}</span>
										<span>{items[id].price}$</span>
										<div className='flex'>
											{' '}
											{count > 1 ? (
												<button data={id} className='px-2 py-1' onClick={handleCartSubstract}>
													-
												</button>
											) : (
												<button data={id} className='px-2 py-1' onClick={deleteFromCart}>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														height='1em'
														viewBox='0 0 448 512'
														className='fill-red-500 w-[12px] mt-1 pointer-events-none'
													>
														<path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z' />
													</svg>
												</button>
											)}
											<span>{itemID.count}</span>
											<button data={id} className='px-2 py-1' onClick={handleCartAdd}>
												+
											</button>
										</div>
									</div>
									<button data={id} className='absolute top-2 left-2 ' onClick={deleteFromCart}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											height='1em'
											viewBox='0 0 448 512'
											className='fill-red-500 pointer-events-none'
										>
											<path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z' />
										</svg>
									</button>
								</li>
							</ul>
						</>
					)
				})
			) : (
				<>
					<h3>Seems like there arent any items in your cart!</h3>
					<Link to='/shop' className=' underline'>
						Click here to start shopping!
					</Link>
				</>
			)}
			{cart.length && (
				<>
					<CartTotalSummary items={items} cart={cart} total={total} />
				</>
			)}
		</section>
	)
}
export default Cart
