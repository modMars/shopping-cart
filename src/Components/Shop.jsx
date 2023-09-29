import Card from './Card'
const Shop = ({ items, handleElementAdd }) => {
	return (
		<>
			<h2 className='my-8'>Shop</h2>
			<section className='flex justify-evenly flex-wrap gap-8 my-12'>
				{items &&
					items.map(item => (
						<Card
							id={item.id}
							title={item.title}
							price={item.price}
							rate={item.rating.rate}
							image={item.image}
							handleElementAdd={handleElementAdd}
							key={item.id}
						></Card>
					))}
			</section>
		</>
	)
}
export default Shop
