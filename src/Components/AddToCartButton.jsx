export default function AddToCartButton({ handleElementAdd, id }) {
	return (
		<button
			className='duration-200 transition-colors rounded-lg max-w-[8rem] px-4 py-2 mx-auto border border-fg hover:border-acc hover:text-fg '
			onClick={handleElementAdd}
			data={id}
			data-testid={`card-${id}`}
		>
			Add to cart
		</button>
	)
}
