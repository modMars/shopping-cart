const fetchData = async () => {
	const response = await fetch('https://fakestoreapi.com/products/', { mode: 'cors' })

	if (response.status >= 400) {
		throw new Error('Server error')
	}

	const data = await response.json()

	const shopItems = data.map((element, index) => ({
		...element,
		id: index,
	}))

	return shopItems
}

export { fetchData }
