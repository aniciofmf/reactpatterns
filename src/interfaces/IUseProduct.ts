import { IProduct } from "./IProduct";
import { IOnChange } from "./IOnChange";

export interface IUseProductArgs {
	product: IProduct;
	onChange?: (args: IOnChange) => void;
	value?: number;
}
