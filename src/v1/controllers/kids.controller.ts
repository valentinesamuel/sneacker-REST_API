import {Response, Request} from 'express';
import {serviceContainer} from '../services/index.service';
import {
	successResponse,
	errorResponse,
	getErrorMessage
} from '../../util/response';

const getAllKidsShoes = async (_req: Request, res: Response) => {
	try {
		const products = await serviceContainer.getAllKidsShoesService();
		successResponse(res, 'This can be any message', products, 200);
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

const getAllKidsClothes = async (_req: Request, res: Response) => {
	try {
		const products = await serviceContainer.getAllKidsClothesService();
		successResponse(res, 'This can be any message', products, 200);
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

export {getAllKidsShoes, getAllKidsClothes};
