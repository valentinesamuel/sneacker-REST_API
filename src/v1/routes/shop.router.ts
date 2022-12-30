/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import {controllerContainer} from '../controllers/index.controller';

const shopRouter: Router = express.Router();

shopRouter.get('/', controllerContainer.getAllProducts);
shopRouter.get('/men', controllerContainer.getAllMensProducts);
shopRouter.get('/women', controllerContainer.getAllWomensProducts);
shopRouter.get('/kids', controllerContainer.getAllKidsProducts);

export {shopRouter};
