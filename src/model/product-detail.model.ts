import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductDetailSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	benefits: {
		type: [String],
		required: true
	},
	details: {
		type: [String],
		required: true
	},
	moreDetails: {
		type: [String],
		required: true
	}
});

const ProductDetail = mongoose.model('ProductDetails', ProductDetailSchema);
export {ProductDetail};
