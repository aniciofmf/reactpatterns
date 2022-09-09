import { IProduct } from "./IProduct";

export interface IProductContext {
	product: IProduct;
	increaseBy: (value: number) => void;
	quantity: number;
}
