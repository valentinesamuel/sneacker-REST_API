// import {Product} from '../model/product.model';

const fetchAllProducts = async (_requestBody: unknown) => {
	// const products = await Product.find({});
	// return products;
	console.log('About to enter db to get all products');
};

const fetchAllMensProducts = async (_requestBody: unknown) => {
	// const products = await Product.find({});
	// return products;
	console.log("About to enter db to get all men's product");
};

const fetchAllWomensProducts = async (_requestBody: unknown) => {
	// const products = await Product.find({});
	// return products;
	console.log("About to enter db to get all women's product");
};

const fetchAllKidsProducts = async (_requestBody: unknown) => {
	// const products = await Product.find({});
	// return products;
	console.log('About to enter db to get all kids product');
};

export {
	fetchAllProducts,
	fetchAllMensProducts,
	fetchAllWomensProducts,
	fetchAllKidsProducts
};
