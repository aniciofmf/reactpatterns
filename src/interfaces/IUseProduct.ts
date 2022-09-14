import { IProduct, IInitialValues } from "./IProduct";
import { IOnChange } from "./IOnChange";

export interface IUseProductArgs {
	product: IProduct;
	onChange?: (args: IOnChange) => void;
	value?: number;
	initialValues: IInitialValues;
}
