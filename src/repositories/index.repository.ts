import {
	fetchAllProducts,
	fetchAllMensProducts,
	fetchAllWomensProducts,
	fetchAllKidsProducts
} from './shop.repository';

import {fetchAllMensShoes} from './men.repository';

const repositoryContainer = {
	fetchAllProducts,
	fetchAllMensProducts,
	fetchAllKidsProducts,
	fetchAllWomensProducts,
	fetchAllMensShoes
};

export {repositoryContainer};
