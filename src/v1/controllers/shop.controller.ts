import {Request, Response} from 'express';
import {convertStringToObject} from '../middleware/query-parser';
import {serviceContainer} from '../services/index.service';

const getAllProducts = async (res: Response) => {
	try {
		const products = await serviceContainer.getAllProductsService();
		console.log(products);

		res.status(200).json({
			data: 'You are now in the shop route'
		});
	} catch (error) {}
};

const getFilteredProducts = async (req: Request, res: Response) => {
	try {
		const urlString = req.url;
		const querySeparatorIndex = urlString.indexOf('?');
		const result = convertStringToObject(
			urlString.substring(querySeparatorIndex + 1)
		);
		console.log(result);

		// const query = {} query will be transformed in database format, added to this object an d sent to the service

		const products = await serviceContainer.getFilteredProductsService(
			req.body
		);
		console.log(products);

		res.status(300).json({
			data: 'You are now getting products based on your query paramaters'
		});
	} catch (error) {}
};

const getAllMensProducts = async (res: Response) => {
	try {
		const products = await serviceContainer.getAllMensProductsService();
		console.log(products);
		res.status(300).json({
			data: "You are now getting all men's product"
		});
	} catch (error) {}
};

const getAllWomensProducts = async (res: Response) => {
	try {
		const products = await serviceContainer.getAllWomensProductsService();
		console.log(products);
		res.status(300).json({
			data: "You are now getting all women's product"
		});
	} catch (error) {}
};

const getAllKidsProducts = async (res: Response) => {
	try {
		const products = await serviceContainer.getAllKidsProductsService();
		console.log(products);
		res.status(300).json({
			data: "You are now getting all kid's product"
		});
	} catch (error) {}
};

export {
	getAllProducts,
	getAllMensProducts,
	getAllWomensProducts,
	getAllKidsProducts,
	getFilteredProducts
};
