import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { useContext } from "react";

import { productContext } from "../context/Context";

export const ProductImg = ({ img = "", className = "" }) => {
	const { product } = useContext(productContext);
	let imgShow;

	if (img) {
		imgShow = img;
	}

	if (!img) {
		imgShow = noImage;
	}

	if (product.img) {
		imgShow = product.img;
	}

	return <img src={imgShow} className={`${styles.productImg} ${className}`} />;
};
