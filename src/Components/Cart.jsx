const Cart = ({ items, cart }) => {
	console.log(cart)
	return (
		<section className='max-w-7xl'>
			<h2>Cart</h2>
			<ul className='flex flex-col'>
				{cart &&
					cart.map(itemID => {
						return (
							<li className='border border-pink-400 p-3'>
								<span>{items[itemID.id - 1].title}</span> <span>{items[itemID.id - 1].price}</span>{' '}
								<div className='flex justify-center gap-4 items-center'>
									<button className='px-2 py-1'>-</button>
									<span>{itemID.count}</span>
									<button className='px-2 py-1'>+</button>
								</div>
							</li>
						)
					})}
			</ul>
		</section>
	)
}
export default Cart
