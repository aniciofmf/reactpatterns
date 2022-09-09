import styles from "../styles/styles.module.css";
import { useContext } from "react";

import { productContext } from "../context/Context";

export const ProductButtons = ({ className = "" }: { className?: string }) => {
	const { quantity, increaseBy } = useContext(productContext);
	return (
		<div className={`${styles.buttonsContainer} ${className}`}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				{" "}
				-{" "}
			</button>
			<div className={styles.countLabel}> {quantity} </div>
			<button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
				{" "}
				+{" "}
			</button>
		</div>
	);
};
