/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import {controllerContainer} from '../controllers/index.controller';

const womenRouter: Router = express.Router();

womenRouter.get('/', controllerContainer.getAllWomensProducts);
womenRouter.get('/shoes', controllerContainer.getAllWomensShoes);

export {womenRouter};
