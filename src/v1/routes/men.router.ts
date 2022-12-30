/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import {controllerContainer} from '../controllers/index.controller';

const menRouter: Router = express.Router();

menRouter.get('/', controllerContainer.getAllMensProducts);
menRouter.get('/shoes', controllerContainer.getAllMensShoes);
