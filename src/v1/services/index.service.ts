import {
	getAllProductsService,
	getAllMensProductsService,
	getAllWomensProductsService,
	getAllKidsProductsService,
	getFilteredProductsService
} from './shop.service';

import {getAllMensShoesService} from './men.service';

const serviceContainer = {
	getAllProductsService,
	getAllMensProductsService,
	getAllWomensProductsService,
	getAllKidsProductsService,
	getAllMensShoesService,
	getFilteredProductsService
};

export {serviceContainer};
