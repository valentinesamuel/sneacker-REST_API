import {Request, Response} from 'express';
import {dbQueryOrderParser, dbQueryParser} from '../../util/db-query_parser';
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
		successResponse(res, 'This can be any message', products, 200);
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

const getFilteredProducts = async (req: Request, res: Response) => {
	try {
		const urlString = req.url;
		const querySeparatorIndex = urlString.indexOf('?');
		const query = convertStringToObject(
			urlString.substring(querySeparatorIndex + 1)
		);
		const dbQuery = dbQueryParser(query);
		const dbQueryOrder = dbQueryOrderParser(query);

		const products = await serviceContainer.getFilteredProductsService(
			dbQuery,
			dbQueryOrder
		);
		successResponse(res, 'This can be any message', products, 200);
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

const getAllMensProducts = async (_req: Request, res: Response) => {
	try {
		const products = await serviceContainer.getAllMensProductsService();
		successResponse(res, 'This can be any message', products, 200);
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

const getAllWomensProducts = async (_req: Request, res: Response) => {
	try {
		const products = await serviceContainer.getAllWomensProductsService();
		successResponse(res, 'This can be any message', products, 200);
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

const getAllKidsProducts = async (_req: Request, res: Response) => {
	try {
		const products = await serviceContainer.getAllKidsProductsService();
		successResponse(res, 'This can be any message', products, 200);
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
