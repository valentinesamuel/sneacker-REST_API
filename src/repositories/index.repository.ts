import {
	fetchAllProducts,
	fetchAllMensProducts,
	fetchAllWomensProducts,
	fetchAllKidsProducts,
	fetchFilteredProducts
} from './shop.repository';

import {fetchAllMensShoes} from './men.repository';
import {fetchAllWomensShoes} from './women.repository';
import {fetchAllKidsShoes, fetchAllKidsClothes} from './kids.repository';

const repositoryContainer = {
	fetchAllProducts,
	fetchAllMensProducts,
	fetchAllKidsProducts,
	fetchAllWomensProducts,
	fetchAllMensShoes,
	fetchFilteredProducts,
	fetchAllWomensShoes,
	fetchAllKidsShoes,
	fetchAllKidsClothes
};

export {repositoryContainer};
