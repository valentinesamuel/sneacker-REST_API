import {
	getAllProductsService,
	getAllMensProductsService,
	getAllWomensProductsService,
	getAllKidsProductsService
} from './shop.service';

const serviceContainer = {
	getAllProductsService,
	getAllMensProductsService,
	getAllWomensProductsService,
	getAllKidsProductsService
};

export {serviceContainer};
