import {Product} from '../model/product.model';

const fetchAllKidsShoes = async () => {
	const products = await Product.find({age: 'kid', category: 'shoe'});
	return products;
};

const fetchAllKidsClothes = async () => {
	const product = await Product.find({age: 'kid', category: 'clothing'});
	return product;
};

export {fetchAllKidsShoes, fetchAllKidsClothes};
