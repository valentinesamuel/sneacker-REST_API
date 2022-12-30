import {repositoryContainer} from '../../repositories/index.repository';

const getAllProductsService = async (requestBody: unknown) => {
	const products = await repositoryContainer.fetchAllProducts(requestBody);
	if (products === null) {
		throw new Error('Products could not be retrieved');
	}
};

const getAllMensProductsService = async (requestBody: unknown) => {
	const products = await repositoryContainer.fetchAllMensProducts(requestBody);
	if (products === null) {
		throw new Error("Men's shoes could not be retrieved");
	}
};

const getAllWomensProductsService = async (requestBody: unknown) => {
	const products = await repositoryContainer.fetchAllWomensProducts(
		requestBody
	);
	if (products === null) {
		throw new Error("Women's shoes could not be retrieved");
	}
};

const getAllKidsProductsService = async (requestBody: unknown) => {
	const products = await repositoryContainer.fetchAllKidsProducts(requestBody);
	if (products === null) {
		throw new Error('Kids shoes could not be retrieved');
	}
};

export {
	getAllProductsService,
	getAllMensProductsService,
	getAllWomensProductsService,
	getAllKidsProductsService
};
