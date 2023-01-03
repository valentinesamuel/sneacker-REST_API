// import {Product} from '../model/product.model';

const fetchAllProducts = async () => {
	// const products = await Product.find({});
	// return products;
	console.log('About to enter db to get all products');
};

const fetchFilteredProducts = async (
	_requestBody: unknown,
	_dbQueryOrder: any
) => {
	// const products = await Product.find(requestBody).sort(_dbQueryOrder);
	// return products;
	console.log('About to enter db to get products according to query params');
};

const fetchAllMensProducts = async () => {
	// const products = await Product.find({ gender: 'male' });
	// return products;
	console.log("About to enter db to get all men's product");
};

const fetchAllWomensProducts = async () => {
	// const products = await Product.find({{ gender: 'female' }});
	// return products;
	console.log("About to enter db to get all women's product");
	return null;
};

const fetchAllKidsProducts = async () => {
	// const products = await Product.find({{ age: 'kid' }});
	// return products;
	console.log('About to enter db to get all kids product');
};

export {
	fetchAllProducts,
	fetchAllMensProducts,
	fetchAllWomensProducts,
	fetchAllKidsProducts,
	fetchFilteredProducts
};
