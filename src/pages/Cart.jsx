import { Link } from 'react-router-dom'
import CartItem from '../Components/CartItem'

const Cart = ({ items, cart, total, handleCartAdd, handleCartSubstract, deleteFromCart }) => {
	//Keep only two digits after the decimal point
	total = total.toFixed(2)
	return (
		<>
			<h2 className='pageHeader'>Cart</h2>
			<div className='flex justify-center text-bg dark:text-fg'>
				{cart.length > 0 ? (
					<ul className='inline-flex flex-col max-w-lg'>
						{cart.map(item => (
							<CartItem
								key={item.id}
								item={items[item.id]}
								count={item.count}
								handleCartAdd={handleCartAdd}
								handleCartSubstract={handleCartSubstract}
								deleteFromCart={deleteFromCart}
							/>
						))}
					</ul>
				) : (
					<div>
						<h3>Seems like there aren&apos;t any items in your cart!</h3>
						<Link to='/shop' className='underline hover:text-acc'>
							Click here to start shopping!
						</Link>
					</div>
				)}
				{cart.length > 0 && (
					<div className='sticky top-12 bg-fg text-bg shadow-2xl rounded-xl min-w-[244px] h-[100px] p-8 ml-12 inline-block'>
						<p className='text-2xl inline'>Total: {total}$</p>
					</div>
				)}
			</div>
		</>
	)
}

export default Cart
