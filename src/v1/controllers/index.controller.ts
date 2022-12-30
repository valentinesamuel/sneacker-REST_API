import {
	getAllProducts,
	getAllMensProducts,
	getAllKidsProducts,
	getAllWomensProducts
} from './shop.controller';
import {getAllMensShoes} from './men.controller';

export const controllerContainer = {
	getAllProducts,
	getAllMensProducts,
	getAllWomensProducts,
	getAllKidsProducts,
	getAllMensShoes
};
