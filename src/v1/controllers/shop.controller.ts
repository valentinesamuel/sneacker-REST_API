import {Request, Response} from 'express';
import {
	errorResponse,
	getErrorMessage,
	successResponse
} from '../../util/response';
import {convertStringToObject} from '../middleware/query-parser';
import {serviceContainer} from '../services/index.service';

const getAllProducts = async (_req: Request, res: Response) => {
	try {
		const products = await serviceContainer.getAllProductsService();
		console.log(products);

		successResponse(res, 'This can be any message', {
			data: 'You are now in the shop route'
		});
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
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

		successResponse(res, 'This can be any message', {
			data: 'You are now getting products based on your query paramaters'
		});
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

const getAllMensProducts = async (_req: Request, res: Response) => {
	try {
		const products = await serviceContainer.getAllMensProductsService();
		console.log(products);
		successResponse(res, 'This can be any message', {
			data: "You are now getting all men's product"
		});
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

const getAllWomensProducts = async (_req: Request, res: Response) => {
	try {
		const products = await serviceContainer.getAllWomensProductsService();
		console.log(products);
		successResponse(res, 'This can be any message', {
			data: "You are now getting all women's product"
		});
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

const getAllKidsProducts = async (_req: Request, res: Response) => {
	try {
		const products = await serviceContainer.getAllKidsProductsService();
		console.log(products);

		successResponse(res, 'This can be any message', {
			data: "You are now getting all kid's product"
		});
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

export {
	getAllProducts,
	getAllMensProducts,
	getAllWomensProducts,
	getAllKidsProducts,
	getFilteredProducts
};
