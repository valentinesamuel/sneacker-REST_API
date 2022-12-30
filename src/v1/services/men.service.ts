import {repositoryContainer} from '../../repositories/index.repository';

const getAllMensShoesService = async (requestBody: unknown) => {
	const products = await repositoryContainer.fetchAllMensShoes(requestBody);
	if (products === null) {
		throw new Error('Mens shoes could not be retrieved');
	}
};

export {getAllMensShoesService};
