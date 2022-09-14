import { useCart } from "../hooks/useCart";
import { products } from "../data/product-data";

import { ProductCard } from "../components/ProductCard";
import { ProductTitle } from "../components/ProductTitle";
import { ProductImg } from "../components/ProductImg";
import { ProductButtons } from "../components/ProductButtons";

import "../styles/custom.css";

export const MainPage = () => {
	const { onProductChange } = useCart();

	return (
		<div>
			<h1>Shopping Items</h1>
			<br />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				{products.map((product) => {
					return (
						<ProductCard
							key={product.id}
							className="bg-dark"
							product={product}
							onChange={(evt) => onProductChange(evt)}
							initialValues={{
								quantity: 4,
								maxQuantity: 10,
							}}
						>
							{({ reset, increaseBy }) => (
								<>
									<ProductImg className="custom-image" />
									<ProductTitle className="text-white" title={product.title} />
									<ProductButtons className="custom-buttons" />

									<button onClick={reset}>Reset</button>

									<button onClick={() => increaseBy(+2)}>+2</button>
									<button onClick={() => increaseBy(-2)}>-2</button>
								</>
							)}
						</ProductCard>
					);
				})}
			</div>
		</div>
	);
};
