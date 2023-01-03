import {Product} from '../model/product.model';

const fetchAllMensShoes = async () => {
	const products = await Product.find({gender: 'male', category: 'shoe'});
	return products;
};

export {fetchAllMensShoes};
