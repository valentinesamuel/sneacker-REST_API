import {repositoryContainer} from '../../repositories/index.repository';

const getAllWomensShoesService = async () => {
	const products = await repositoryContainer.fetchAllWomensShoes();
	if (products === null) {
		throw new Error("Women's shoes could not be retrieved");
	}
	return products;
};

export {getAllWomensShoesService};
