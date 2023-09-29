import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'
import Card from './Components/Card'
import Cart from './Components/Cart'
import ErrorPage from './Components/ErrorPage'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import Shop from './Components/Shop'

function App() {
	const { name } = useParams()
	const [items, setItems] = useState([])
	const [cart, setCart] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const promise = await fetch('https://fakestoreapi.com/products/', { mode: 'cors' })
			if (promise.status >= 400) {
				throw new Error('Server error')
			}
			const data = await promise.json()
			data.forEach(element => {
				setItems(prevItem => [...prevItem, element])
			})
		}
		fetchData()
	}, [])

	const handleElementAdd = e => {
		const id = parseInt(e.target.attributes.data.value)
		const itemIndex = cart.findIndex(item => item.id === id)
		if (itemIndex === -1) {
			setCart(prevItems => [...prevItems, { id: id, count: 1 }])
		} else {
			setCart(prevItems => {
				const updatedCart = [...prevItems]
				updatedCart[itemIndex].count += 1
				return updatedCart
			})
		}
	}

	return (
		<>
			<Navbar cartCount={cart.length}></Navbar>
			<main className='min-h-[93svh] mx-auto max-w-[1280px] pt-8'>
				{name === undefined ? (
					<Landing />
				) : name === 'shop' ? (
					<Shop items={items} handleElementAdd={handleElementAdd} />
				) : name === 'cart' ? (
					<Cart items={items} cart={cart} />
				) : (
					<ErrorPage />
				)}
			</main>
		</>
	)
}

export default App
