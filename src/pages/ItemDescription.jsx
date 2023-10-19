import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AddToCartButton from '../Components/AddToCartButton'

export default function ItemDescription({ items, handleElementAdd }) {
	//Extract the current id from the URL.
	let { id } = useParams()
	id = parseInt(id)

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
					<section className='flex flex-wrap justify-center gap-16 mt-8'>
						<div className='shadow-2xl flex bg-white px-[5rem] min-w-[300px] max-w-[500px] min-h-[350px] max-h-[500px] rounded-xl items-center justify-center'>
							<img src={items[id].image} alt='' className='h-full min-w-full object-contain' />
						</div>
						<div className='flex flex-col gap-8 justify-between min-h-[30rem] max-w-[650px]'>
							<h2 className='text-4xl font-hero px-8'>{items[id].title}</h2>
							<p className='text-lg px-8 text-left max-[425px]:text-base max-[425px]:p-0'>{items[id].description}</p>
							<div className='flex gap-8 items-center max-md:flex-col'>
								<p className='mx-auto font-bold text-3xl'>{items[id].price}$</p>
								<div className='flex gap-8 mx-auto'>
									<div className='flex gap-[0.15rem]'>{starIcons}</div>
									<h3 className='text-base self-center text-gray-500 font-bold'>{items[id].rating.rate} out of 5</h3>
								</div>
							</div>
							<AddToCartButton handleElementAdd={handleElementAdd} id={id} />
						</div>
					</section>
				</>
			)}
			<ToastContainer
				position='bottom-center'
				autoClose={3000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				theme='light'
			/>
		</>
	)
}
