import { useState, useEffect, useRef } from "react";
import { IUseProductArgs } from "../interfaces/IUseProduct";

export const useProduct = ({ onChange, product, value = 0, initialValues }: IUseProductArgs) => {
	const [quantity, setQuantity] = useState<number>(initialValues.quantity || value);
	const isMounted = useRef(false);

	const increaseBy = (value: number) => {
		let newQty = Math.max(quantity + value, 0);
		const maxQty = initialValues.maxQuantity || Infinity;

		if (maxQty !== Infinity && newQty > maxQty) {
			newQty = Math.min(newQty, maxQty);
		}

		setQuantity(newQty);

		if (onChange) {
			onChange({ quantity: newQty, product });
		}
	};

	useEffect(() => {
		if (!isMounted.current) return;

		value && setQuantity(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		quantity,
		increaseBy,
		maxQty: initialValues.maxQuantity,
	};
};
