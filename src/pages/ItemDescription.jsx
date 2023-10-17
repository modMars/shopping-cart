import { useParams } from 'react-router-dom'
import AddToCartButton from '../Components/AddToCartButton'

export default function ItemDescription({ items, handleElementAdd }) {
	//Extract the current id from the URL.
	let { id } = useParams()
	id = parseInt(id)
	console.log(id, items)

	//Render rating stars dinamically
	let i = Math.floor(items[id].rating.rate)
	const starIcons = []
	for (let index = 0; index < 5; index++) {
		const starClass = index < i ? 'text-yellow-300' : 'text-gray-400'
		starIcons.push(<i key={index} className={`fa-solid fa-star ${starClass} text-2xl`}></i>)
	}

	//Display the information based on the item id
	return (
		<>
			{items.length && (
				<>
					<section className='flex text-left mt-8'>
						<div className='flex bg-white px-[5rem] min-w-[400px] max-w-[500px] max-h-[500px] rounded-xl items-center justify-center'>
							<img src={items[id].image} alt='' className='h-full min-w-full object-contain' />
						</div>
						<div className='flex flex-col gap-8 justify-between min-h-[30rem] max-w-[650px]'>
							<h2 className='text-4xl font-hero px-8'>{items[id].title}</h2>
							<p className='text-lg px-8'>{items[id].description}</p>
							<div className='flex items-center'>
								<p className='mx-auto font-bold text-3xl'>{items[id].price}$</p>
								<div className='flex gap-8 mx-auto'>
									<div className='flex gap-[0.15rem]'>{starIcons}</div>
									<h3 className='text-3xl font-bold'>{items[id].rating.rate}</h3>
								</div>
							</div>

							<AddToCartButton handleElementAdd={handleElementAdd} id={id} />
						</div>
					</section>
				</>
			)}
		</>
	)
}
