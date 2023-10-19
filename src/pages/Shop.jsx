import { ToastContainer } from 'react-toastify'
import Card from '../Components/Card'
const Shop = ({ items, handleElementAdd }) => {
	console.log(items)
	return (
		<>
			<h2 className='pageHeader'>Shop</h2>
			<section className='flex flex-wrap justify-center gap-8 mb-12'>
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
							data-testid={`card-${item.id}`}
						></Card>
					))}
			</section>
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
export default Shop
