import {repositoryContainer} from '../../repositories/index.repository';

const getAllKidsShoesService = async () => {
	const products = await repositoryContainer.fetchAllKidsShoes();
	if (products === null) {
		throw new Error('Kids shoes could not be retrieved');
	}
	return products;
};

export {getAllKidsShoesService};
