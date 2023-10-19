import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { fetchData } from './helpers/fetchShopItems'
import Router from './router/Router'

export default function App() {
	//Will hold the fetched items
	const [items, setItems] = useState([])
	//Will keep track of the user's cart
	const [cart, setCart] = useState([])
	//Keep track of the total sum of all the items in the user's cart
	const [total, setTotal] = useState(0)
	//Loading state
	const [loading, setLoading] = useState(true)

	//Keep the cart total updated
	useEffect(() => {
		const newTotal = cart.reduce((sum, item) => {
			const id = item.id
			return sum + items[id].price * item.count
		}, 0)
		setTotal(newTotal)
	}, [cart, items])

	//Fetch items from the FakeStore API
	useEffect(() => {
		const fetchItems = async () => {
			const fetchedItems = await fetchData()
			setItems(fetchedItems)
			setLoading(false)
		}
		fetchItems()
	}, [])

	//On click update the cart to include the specific item, if it already exists in the cart add 1 to the count key.
	const handleElementAdd = e => {
		const id = parseInt(e.target.attributes.data.value)
		const cartIndex = cart.findIndex(item => item.id === id)
		if (cartIndex === -1) {
			setCart(prevItems => [...prevItems, { id: id, count: 1 }])
		} else {
			setCart(prevItems => {
				const updatedCart = [...prevItems]
				updatedCart[cartIndex].count += 1
				return updatedCart
			})
		}
	}

	//Add 1 to the cart item count
	const handleCartAdd = e => {
		const id = parseInt(e.target.attributes.data.value)
		const itemIndex = cart.findIndex(item => item.id === id)
		setCart(prevItems => {
			const updatedCart = [...prevItems]
			updatedCart[itemIndex].count += 1
			return updatedCart
		})
	}

	//Remove 1 from the cart item count
	const handleCartSubstract = e => {
		const id = parseInt(e.target.attributes.data.value)
		const itemIndex = cart.findIndex(item => item.id === id)
		setCart(prevItems => {
			const updatedCart = [...prevItems]
			updatedCart[itemIndex].count -= 1
			return updatedCart
		})
	}

	//Splice a portion of the cart to delete a specific item
	const deleteFromCart = e => {
		const id = parseInt(e.target.attributes.data.value)
		const itemIndex = cart.findIndex(item => item.id === id)
		setCart(prevItems => {
			const updatedCart = [...prevItems]
			updatedCart.splice(itemIndex, 1)
			return updatedCart
		})
	}
	//Properly route and provide the necessary prop variables to each component.
	return (
		<>
			<Navbar cartCount={cart.length}></Navbar>
			<main className='mx-auto max-w-screen-2xl px-12 text-bg dark:text-fg'>
				{loading ? (
					<div className='text-5xl mt-12'>Fetching data, please wait..</div>
				) : (
					<Router
						items={items}
						setItems={setItems}
						cart={cart}
						total={total}
						handleElementAdd={handleElementAdd}
						handleCartAdd={handleCartAdd}
						handleCartSubstract={handleCartSubstract}
						deleteFromCart={deleteFromCart}
					/>
				)}
			</main>
		</>
	)
}
