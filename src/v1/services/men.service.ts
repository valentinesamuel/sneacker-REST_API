import {repositoryContainer} from '../../repositories/index.repository';

const getAllMensShoesService = async () => {
	const products = await repositoryContainer.fetchAllMensShoes();
	if (products === null) {
		throw new Error('Mens shoes could not be retrieved');
	}
};

export {getAllMensShoesService};
