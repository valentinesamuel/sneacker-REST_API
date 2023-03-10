import {
	getAllProductsService,
	getAllMensProductsService,
	getAllWomensProductsService,
	getAllKidsProductsService,
	getFilteredProductsService
} from './shop.service';

import {getAllMensShoesService} from './men.service';
import {getAllWomensShoesService} from './women.service';
import {getAllKidsShoesService, getAllKidsClothesService} from './kids.service';

const serviceContainer = {
	getAllProductsService,
	getAllMensProductsService,
	getAllWomensProductsService,
	getAllKidsProductsService,
	getAllMensShoesService,
	getFilteredProductsService,
	getAllWomensShoesService,
	getAllKidsShoesService,
	getAllKidsClothesService
};

export {serviceContainer};
