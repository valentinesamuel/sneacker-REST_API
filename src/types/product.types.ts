import {IProductDetail} from './product-detail.types';
import {IReview} from './review.types';

export interface IProduct {
	id: number;
	image: string;
	name: string;
	category: string;
	price: number;
	isAccessory: boolean;
	accessoryType: string;
	description: string;
	sizes: string[];
	gender: string;
	age: string;
	kidAge: string[];
	colors: string[];
	brand: string;
	activities: string[];
	belongsToCollection: boolean;
	collections: string[];
	athlete: string;
	sport: string[];
	productDetail: IProductDetail;
	reviews: IReview;
}
