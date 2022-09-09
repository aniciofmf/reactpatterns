import { useState, useEffect, useRef } from "react";
import { IUseProductArgs } from "../interfaces/IUseProduct";

export const useProduct = ({ onChange, product, value = 0 }: IUseProductArgs) => {
	const [quantity, setQuantity] = useState(value);
	const changeRef = useRef(!!onChange);

	const increaseBy = (value: number) => {
		const newQty = Math.max(quantity + value, 0);

		if (changeRef.current && onChange) {
			return onChange({ quantity: value, product });
		}

		setQuantity(newQty);

		if (onChange) {
			onChange({ quantity: newQty, product });
		}
	};

	useEffect(() => {
		setQuantity(value);
	}, [value]);

	return {
		quantity,
		increaseBy,
	};
};
