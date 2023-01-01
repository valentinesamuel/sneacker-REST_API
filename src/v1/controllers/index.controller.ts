import {
	getAllProducts,
	getAllMensProducts,
	getAllKidsProducts,
	getAllWomensProducts,
	getFilteredProducts
} from './shop.controller';
import {getAllMensShoes} from './men.controller';

export const controllerContainer = {
	getAllProducts,
	getAllMensProducts,
	getAllWomensProducts,
	getAllKidsProducts,
	getFilteredProducts,
	getAllMensShoes
};
