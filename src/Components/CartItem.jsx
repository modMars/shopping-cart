const CartItem = ({ item, count, handleCartAdd, handleCartSubstract, deleteFromCart }) => {
	const { id, title, price, image } = item
	return (
		<li className='relative shadow-2xl bg-fg text-bg px-8 mb-8 rounded-xl flex items-center justify-center' key={id}>
			<div className='flex align-center w-[200px] h-[200px] p-2 mr-4 bg-white rounded-xl self-center'>
				<img src={image} className='w-full h-auto object-contain' alt='' />
			</div>
			<div className='w-[300px] h-[300px] flex flex-col justify-center gap-4 items-center'>
				<span className='text-xl text-center'>{title}</span>
				<span className='text-lg font-bold text-bg'>{price}$</span>
				<div className='flex items-center justify-center.toFixed(2) gap-4'>
					{count > 1 ? (
						<button
							data={id}
							className='w-5 h-5 rounded-full bg-bg text-white flex items-center justify-center'
							onClick={handleCartSubstract}
						>
							-
						</button>
					) : (
						<button
							data={id}
							className='w-5 h-5 rounded-full bg-bg text-white flex items-center justify-center'
							onClick={deleteFromCart}
						>
							-
						</button>
					)}
					<span>{count}</span>
					<button
						data={id}
						className='w-5 h-5 rounded-full bg-bg text-white flex items-center justify-center'
						onClick={handleCartAdd}
					>
						+
					</button>
				</div>
			</div>
			<button
				data={id}
				className='absolute bottom-4 right-10 text-red-400 hover:text-red-500 hover:underline'
				onClick={deleteFromCart}
			>
				Remove
			</button>
		</li>
	)
}

export default CartItem
