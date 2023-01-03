import {Product} from '../model/product.model';

const fetchAllKidsShoes = async () => {
	const products = await Product.find({age: 'kid', category: 'shoe'});
	return products;
};

export {fetchAllKidsShoes};
