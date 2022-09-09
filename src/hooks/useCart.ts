import { useState } from "react";
import { IOnChange } from "../interfaces/IOnChange";
import { IProductCart } from "../interfaces/IProduct";

export const useCart = () => {
	const [shopCart, setShopCart] = useState<{ [key: string]: IProductCart }>({});

	const onProductChange = ({ quantity, product }: IOnChange) => {
		setShopCart((oldCart) => {
			const productCart: IProductCart = oldCart[product.id] || { ...product, quantity: 0 };

			if (Math.max(productCart.quantity + quantity, 0) > 0) {
				productCart.quantity += quantity;
				return {
					...oldCart,
					[productCart.id]: productCart,
				};
			}

			const { [product.id]: remove, ...rest } = oldCart;

			return {
				...rest,
			};
		});
	};

	return {
		shopCart,
		onProductChange,
	};
};
