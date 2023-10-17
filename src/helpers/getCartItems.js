const getCartItems = (items, cart) => {
	const filteredItems = items.filter(item => item.id === cart.id)
	return filteredItems
}

export { getCartItems }
