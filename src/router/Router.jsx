import { Route, Routes } from 'react-router-dom'
import ErrorPage from '../Components/ErrorPage'
import Cart from '../pages/Cart'
import ItemDescription from '../pages/ItemDescription'
import Landing from '../pages/Landing'
import Shop from '../pages/Shop'

const Router = ({
	items,
	setItems,
	cart,
	total,
	handleElementAdd,
	handleCartAdd,
	handleCartSubstract,
	deleteFromCart,
}) => {
	return (
		<Routes>
			<Route path='/' element={<Landing />} />
			<Route path='/shop' element={<Shop items={items} handleElementAdd={handleElementAdd} setItems={setItems} />} />
			<Route path='shop/:id' element={<ItemDescription items={items} handleElementAdd={handleElementAdd} />} />
			<Route
				path='/cart'
				element={
					<Cart
						items={items}
						cart={cart}
						total={total}
						handleCartAdd={handleCartAdd}
						handleCartSubstract={handleCartSubstract}
						deleteFromCart={deleteFromCart}
					/>
				}
			/>
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	)
}

export default Router
