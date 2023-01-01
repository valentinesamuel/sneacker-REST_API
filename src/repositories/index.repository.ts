import {
	fetchAllProducts,
	fetchAllMensProducts,
	fetchAllWomensProducts,
	fetchAllKidsProducts,
	fetchFilteredProducts
} from './shop.repository';

import {fetchAllMensShoes} from './men.repository';

const repositoryContainer = {
	fetchAllProducts,
	fetchAllMensProducts,
	fetchAllKidsProducts,
	fetchAllWomensProducts,
	fetchAllMensShoes,
	fetchFilteredProducts
};

export {repositoryContainer};
