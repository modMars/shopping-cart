import { getCartItems } from '../helpers/getCartItems'

export default function CartTotalSummary({ items, cart, total }) {
	let cartItems = getCartItems(items, cart)

	return (
		<>
			{cartItems.map(item => {
				return <>{item.price}</>
			})}
		</>
	)
}
