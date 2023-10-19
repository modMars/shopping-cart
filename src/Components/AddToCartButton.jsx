import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AddToCartButton({ handleElementAdd, id }) {
	const notify = () => toast.success(`Item added to cart  ✔`)

	return (
		<>
			<button
				className='font-bold duration-200 transition-colors rounded-lg max-w-[8rem] px-4 py-2 mx-auto my-8 border-2 border-bg bg-bg text-fg focus:outline-accSecondary hover:border-acc hover:bg-acc hover:text-bg dark:border-fg dark:bg-fg dark:text-bg'
				onClick={e => {
					handleElementAdd(e)
					notify(e)
				}}
				data={id}
				data-testid={`card-${id}`}
			>
				Add to cart
			</button>
		</>
	)
}
