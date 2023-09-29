const Card = ({
	id = '0',
	title = 'loremloremlor',
	price = '59.99',
	rate = '3.9',
	image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
	handleElementAdd,
}) => {
	return (
		<div
			onClick={handleElementAdd}
			className='flex flex-col justify-evenly text-slate-500 w-[250px] min-h-[250px] border-2 border-red-700 bg-[#ffffff] cursor-pointer'
			data={id}
		>
			<h3 className='pointer-events-none p-3 text-lg break-words text-ellipsis overflow-hidden whitespace-nowrap'>
				{title}
			</h3>
			<div className='pointer-events-none flex justify-between gap-6'>
				<p className='pointer-events-none text-sm px-4 font-bold'>{price} $</p>
				<p className='pointer-events-none text-sm px-4 font-bold'>
					{rate} <i className='fa-solid fa-star text-yellow-300'></i>
				</p>
			</div>
			<div className='pointer-events-none mx-auto'>
				<img className='w-[110px] max-w-full h-[150px] object-contain' src={image} alt='' />
			</div>
		</div>
	)
}

export default Card
