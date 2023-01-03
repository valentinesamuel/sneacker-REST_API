import {
	errorResponse,
	getErrorMessage,
	successResponse
} from '../../util/response';
import {Response, Request} from 'express';
import {serviceContainer} from '../services/index.service';

const getAllWomensShoes = async (_req: Request, res: Response) => {
	try {
		const products = await serviceContainer.getAllWomensShoesService();
		console.log(products);
		successResponse(res, 'This can be any message', products, 200);
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

export {getAllWomensShoes};
