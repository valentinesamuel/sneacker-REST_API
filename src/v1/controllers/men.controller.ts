import {Response, Request} from 'express';
import {serviceContainer} from '../services/index.service';
import {
	successResponse,
	errorResponse,
	getErrorMessage
} from '../../util/response';

const getAllMensShoes = async (_req: Request, res: Response) => {
	try {
		const products = await serviceContainer.getAllMensShoesService();
		successResponse(res, 'This can be any message', products, 200);
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

export {getAllMensShoes};
