import {Product} from '../model/product.model';

const fetchAllWomensShoes = async () => {
	const products = await Product.find({gender: 'female', category: 'shoe'});
	return products;
};

export {fetchAllWomensShoes};
