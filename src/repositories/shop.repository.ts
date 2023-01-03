import {Product} from '../model/product.model';

const fetchAllProducts = async () => {
	const products = await Product.find({});
	return products;
};

const fetchFilteredProducts = async (requestBody: any, _dbQueryOrder: any) => {
	const products = await Product.find({...requestBody});
	return products;
};

const fetchAllMensProducts = async () => {
	const products = await Product.find({gender: 'male'});
	return products;
};

const fetchAllWomensProducts = async () => {
	const products = await Product.find({gender: 'female'});
	return products;
};

const fetchAllKidsProducts = async () => {
	const products = await Product.find({age: 'kid'});
	return products;
};

export {
	fetchAllProducts,
	fetchAllMensProducts,
	fetchAllWomensProducts,
	fetchAllKidsProducts,
	fetchFilteredProducts
};
