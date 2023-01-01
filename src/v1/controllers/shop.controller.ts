import {NextFunction, Request, Response} from 'express';
import {serviceContainer} from '../services/index.service';

const getAllProducts = async (
	req: Request,
	res: Response,
	_nextFunction: NextFunction
) => {
	try {
		const products = await serviceContainer.getAllProductsService(req.body);
		console.log(products);

		res.status(300).json({
			data: 'You are noe in the shop route'
		});
	} catch (error) {}
};

const getFilteredProducts = async (
	req: Request,
	res: Response,
	_nextFunction: NextFunction
) => {
	try {
		const products = await serviceContainer.getFilteredProductsService(
			req.body
		);
		console.log(products);

		res.status(300).json({
			data: 'You are now getting products based on your query paramaters'
		});
	} catch (error) {}
};

const getAllMensProducts = async (
	req: Request,
	res: Response,
	_nextFunction: NextFunction
) => {
	try {
		const products = await serviceContainer.getAllMensProductsService(req.body);
		console.log(products);
		res.status(300).json({
			data: "You are now getting all men's product"
		});
	} catch (error) {}
};

const getAllWomensProducts = async (
	req: Request,
	res: Response,
	_nextFunction: NextFunction
) => {
	try {
		const products = await serviceContainer.getAllWomensProductsService(
			req.body
		);
		console.log(products);
		res.status(300).json({
			data: "You are now getting all women's product"
		});
	} catch (error) {}
};

const getAllKidsProducts = async (
	req: Request,
	res: Response,
	_nextFunction: NextFunction
) => {
	try {
		const products = await serviceContainer.getAllKidsProductsService(req.body);
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
