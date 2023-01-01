import {NextFunction, Response} from 'express';
import {serviceContainer} from '../services/index.service';

const getAllMensShoes = async (res: Response, _nextFunction: NextFunction) => {
	try {
		const products = await serviceContainer.getAllMensShoesService();
		console.log(products);
		res.status(300).json({
			data: "You are now getting all men's shoes"
		});
	} catch (error) {}
};

export {getAllMensShoes};
