import {
	fetchAllProducts,
	fetchAllMensProducts,
	fetchAllWomensProducts,
	fetchAllKidsProducts
} from './shop.repository';

const repositoryContainer = {
	fetchAllProducts,
	fetchAllMensProducts,
	fetchAllKidsProducts,
	fetchAllWomensProducts
};

export {repositoryContainer};
