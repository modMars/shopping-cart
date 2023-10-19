import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CartItem = ({ item, count, handleCartAdd, handleCartSubstract, deleteFromCart }) => {
	const { id, title, price, image } = item
	const notify = () => toast.error(`${title} deleted from cart ❌`)

	return (
		<li
			className='relative shadow-2xl bg-fg text-bg px-8 mb-8 rounded-xl flex items-center justify-center max-md:mx-auto max-md:max-w-[300px] dark:bg-darkSecondary dark:text-fg max-[860px]:flex-col max-[425px]:max-w-[250px] max-[425px]:min-h-[425px]'
			key={id}
		>
			<div className='flex align-center w-[200px] h-[200px] p-2 mt-4 mr-4 bg-white rounded-xl self-center max-[425px]:w-[150px] max-[425px]:h-[150px]'>
				<img src={image} className='w-full h-auto object-contain' alt='' />
			</div>
			<div className='w-[300px] h-[300px] flex flex-col justify-center gap-4 items-center max-[860px]:h-[200px]'>
				<Link
					to={`/shop/${id}`}
					className='transition-colors hover:underline hover:text-accSecondary max-[425px]:w-[24ch]'
				>
					<span className='text-xl text-center break-words max-[425px]:text-base'>{title}</span>
				</Link>
				<span className='text-lg font-bold text-bg dark:text-fg'>{price}$</span>
				<div className='flex items-center justify-center gap-4'>
					{count > 1 ? (
						<button
							data={id}
							className='w-5 h-5 rounded-full bg-bg text-white flex items-center justify-center'
							onClick={handleCartSubstract}
						>
							-
						</button>
					) : (
						<>
							<button
								data={id}
								className='w-5 h-5 rounded-full bg-bg text-white flex items-center justify-center'
								onClick={e => {
									deleteFromCart(e)
									notify(e)
								}}
							>
								-
							</button>
						</>
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
				onClick={e => {
					deleteFromCart(e)
					notify(e)
				}}
			>
				Remove
			</button>
		</li>
	)
}

export default CartItem
