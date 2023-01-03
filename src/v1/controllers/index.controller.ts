import {
	getAllProducts,
	getAllMensProducts,
	getAllKidsProducts,
	getAllWomensProducts,
	getFilteredProducts
} from './shop.controller';
import {getAllMensShoes} from './men.controller';
import {getAllWomensShoes} from './women.controller';
import {getAllKidsShoes} from './kids.controller';

export const controllerContainer = {
	getAllProducts,
	getAllMensProducts,
	getAllWomensProducts,
	getAllKidsProducts,
	getFilteredProducts,
	getAllMensShoes,
	getAllWomensShoes,
	getAllKidsShoes
};
