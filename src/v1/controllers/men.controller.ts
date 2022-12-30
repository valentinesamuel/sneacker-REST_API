import {NextFunction, Request, Response} from 'express';

const getAllMensShoes = (
	_req: Request,
	res: Response,
	_nextFunction: NextFunction
): void => {
	res.status(300).json({
		data: 'You are now getting all mens shoes'
	});
};

export {getAllMensShoes};
