/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import {controllerContainer} from '../controllers/index.controller';

const kidsRouter: Router = express.Router();

kidsRouter.get('/', controllerContainer.getAllKidsProducts);
kidsRouter.get('/shoes', controllerContainer.getAllKidsShoes);

export {kidsRouter};
