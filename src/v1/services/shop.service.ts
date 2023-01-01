import {repositoryContainer} from '../../repositories/index.repository';

const getAllProductsService = async () => {
	const products = await repositoryContainer.fetchAllProducts();
	if (products === null) {
		throw new Error('Products could not be retrieved');
	}
	return products;
};

const getFilteredProductsService = async (requestBody: unknown) => {
	const products = await repositoryContainer.fetchFilteredProducts(requestBody);
	if (products === null) {
		throw new Error('Products could not be retrieved');
	}
	return products;
};

const getAllMensProductsService = async () => {
	const products = await repositoryContainer.fetchAllMensProducts();
	if (products === null) {
		throw new Error("Men's shoes could not be retrieved");
	}
	return products;
};

const getAllWomensProductsService = async () => {
	const products = await repositoryContainer.fetchAllWomensProducts();
	if (products === null) {
		throw new Error("Women's shoes could not be retrieved");
	}
	return products;
};

const getAllKidsProductsService = async () => {
	const products = await repositoryContainer.fetchAllKidsProducts();
	if (products === null) {
		throw new Error('Kids shoes could not be retrieved');
	}
	return products;
};

export {
	getAllProductsService,
	getAllMensProductsService,
	getAllWomensProductsService,
	getAllKidsProductsService,
	getFilteredProductsService
};
