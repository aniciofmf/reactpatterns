import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { productContext } from "../context/Context";
import { propsProduct } from "../interfaces/IProduct";

const { Provider } = productContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues = {} }: propsProduct) => {
	const { quantity, increaseBy, maxQty, isMaxReached, reset } = useProduct({ onChange, product, value, initialValues });

	return (
		<Provider value={{ quantity, increaseBy, product, maxQty }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					quantity,
					isMaxReached,
					reset,
					increaseBy,
					maxQty: initialValues?.maxQuantity,
					product,
				})}
			</div>
		</Provider>
	);
};
