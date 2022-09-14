import styles from "../styles/styles.module.css";
import { useCallback, useContext } from "react";

import { productContext } from "../context/Context";

export const ProductButtons = ({ className = "" }: { className?: string }) => {
	const { quantity, increaseBy, maxQty = 0 } = useContext(productContext);
	const isMaxQtyReached = useCallback(() => {
		if (quantity == maxQty) {
			return true;
		} else {
			return false;
		}
	}, [quantity, maxQty]);

	return (
		<div className={`${styles.buttonsContainer} ${className}`}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				{" "}
				-{" "}
			</button>
			<div className={styles.countLabel}> {quantity} </div>
			<button className={`${styles.buttonAdd} ${isMaxQtyReached() && styles.disabled}`} onClick={() => increaseBy(+1)}>
				{" "}
				+{" "}
			</button>
		</div>
	);
};
