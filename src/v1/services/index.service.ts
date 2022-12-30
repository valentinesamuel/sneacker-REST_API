import {
	getAllProductsService,
	getAllMensProductsService,
	getAllWomensProductsService,
	getAllKidsProductsService
} from './shop.service';

import {getAllMensShoesService} from './men.service';

const serviceContainer = {
	getAllProductsService,
	getAllMensProductsService,
	getAllWomensProductsService,
	getAllKidsProductsService,
	getAllMensShoesService
};

export {serviceContainer};
