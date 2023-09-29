import { Link } from 'react-router-dom'
const Landing = () => {
	return (
		<section>
			<h2>The number one online market</h2>
			<button>
				<Link to='shop'>Go to shop</Link>
			</button>
		</section>
	)
}
export default Landing
