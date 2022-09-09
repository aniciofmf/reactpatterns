import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { productContext } from "../context/Context";
import { propsProduct } from "../interfaces/IProduct";

/* import { ProductTitle } from "./ProductTitle";
import { ProductImg } from "./ProductImg";
import { ProductButtons } from "./ProductButtons";
 */

const { Provider } = productContext;

export const ProductCard = ({ children, product, className, style, onChange, value = 0 }: propsProduct) => {
	const { quantity, increaseBy } = useProduct({ onChange, product, value });

	return (
		<Provider value={{ quantity, increaseBy, product }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};

/*ProductCard.Title = ProductTitle;
ProductCard.Img = ProductImg;
ProductCard.Buttons = ProductButtons;*/
