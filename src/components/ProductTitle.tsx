import styles from "../styles/styles.module.css";
import { useContext } from "react";

import { productContext } from "../context/Context";

export const ProductTitle = ({ title, className }: { title?: string; className?: string }) => {
	const { product } = useContext(productContext);
	let showTitle: string = "";

	if (title && title.length > 0) {
		showTitle = product.title;
	}

	return <span className={`${styles.productDescription} ${className}`}>{showTitle}</span>;
};
