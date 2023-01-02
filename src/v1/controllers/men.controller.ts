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
		console.log(products);
		successResponse(res, 'This can be any message', {
			data: "You are now getting all men's shoes"
		});
	} catch (error) {
		errorResponse([], res, getErrorMessage(error), 404);
	}
};

export {getAllMensShoes};
