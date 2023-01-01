/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import {controllerContainer} from '../controllers/index.controller';
import {menRouter} from './men.router';

const shopRouter: Router = express.Router();

shopRouter.get('/', controllerContainer.getAllProducts);
shopRouter.get('/filter', controllerContainer.getFilteredProducts);
shopRouter.use('/men', menRouter);
shopRouter.get('/women', controllerContainer.getAllWomensProducts);
shopRouter.get('/kids', controllerContainer.getAllKidsProducts);

export {shopRouter};
