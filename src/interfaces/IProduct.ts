import { ReactElement } from "react";
import { IOnChange } from "./IOnChange";

export interface propsProduct {
	product: IProduct;
	children?: ReactElement | ReactElement[];
	className?: string | string[];
	style?: React.CSSProperties;
	onChange?: (args: IOnChange) => void;
	value?: number;
}

export interface IProduct {
	id: string;
	title: string;
	img?: string;
}

export interface IProductCart extends IProduct {
	quantity: number;
}

export interface IProductButtons {
	increaseBy: (value: number) => void;
	counter: number;
}
