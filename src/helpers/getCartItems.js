const getCartItems = (items, cart) => {
	return items.filter(item => item.id === cart.id)
}

export { getCartItems }
