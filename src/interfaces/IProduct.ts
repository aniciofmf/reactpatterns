import { IOnChange } from "./IOnChange";

export interface propsProduct {
	product: IProduct;
	/*children: ReactElement | ReactElement[] |*/
	children: (args: IProductCardHandlers) => JSX.Element;
	className?: string | string[];
	style?: React.CSSProperties;
	onChange?: (args: IOnChange) => void;
	value?: number;
	initialValues?: IInitialValues;
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

export interface IInitialValues {
	quantity?: number;
	maxQuantity?: number;
}

export interface IProductCardHandlers {
	quantity: number;
	isMaxReached: boolean;
	maxQty?: number;
	product: IProduct;
	increaseBy: (value: number) => void;
	reset: () => void;
}
