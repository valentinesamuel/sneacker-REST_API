/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import {controllerContainer} from '../controllers/index.controller';
import {kidsRouter} from './kids.router';
import {menRouter} from './men.router';
import {womenRouter} from './women.router';

const shopRouter: Router = express.Router();

shopRouter.get('/', controllerContainer.getAllProducts);
shopRouter.get('/filter', controllerContainer.getFilteredProducts);
shopRouter.use('/men', menRouter);
shopRouter.use('/women', womenRouter);
shopRouter.use('/kids', kidsRouter);

export {shopRouter};
