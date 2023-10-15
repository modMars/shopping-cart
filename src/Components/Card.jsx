import { Link } from 'react-router-dom'
import AddToCartButton from './AddToCartButton'
const Card = ({
	id = '0',
	title = 'loremloremlor',
	price = '59.99',
	rate = '3.9',
	image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
	handleElementAdd,
}) => {
	return (
		<div className='card'>
			<div className='rounded-t-lg first:pointer-events-none mx-auto w-full py-6 bg-white'>
				<img className='w-[110px] mx-auto max-w-full h-[150px] object-contain' src={image} alt='' />
			</div>
			<Link to={`/shop/${id}`}>
				<h3 className='pointer-events-none px-3 mt-5 pb-2 text-lg break-words text-ellipsis overflow-hidden whitespace-nowrap'>
					{title}
				</h3>
			</Link>
			<div className='pointer-events-none flex justify-around gap-6 px-3'>
				<p className='pointer-events-none text-base font-bold'>{price} $</p>
				<p className='pointer-events-none text-base font-bold'>
					{rate} <i className='fa-solid fa-star text-yellow-300'></i>
				</p>
			</div>
			<AddToCartButton className='my-4 mt-12' handleElementAdd={handleElementAdd} id={id} />
		</div>
	)
}

export default Card
