import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	id: {
		type: Number,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	isAccessory: {
		type: Boolean,
		required: true,
		default: false
	},
	accessoryType: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	sizes: {
		type: [String],
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	age: {
		type: String,
		required: true
	},
	kidAge: {
		type: [String],
		required: true,
		default: null
	},
	colors: {
		type: [String],
		required: true
	},
	brand: {
		type: String,
		required: true
	},
	activities: {
		type: [String],
		required: true
	},
	belongsToCollection: {
		type: Boolean,
		required: true,
		default: false
	},
	collections: {
		type: [String],
		required: true,
		default: null
	},
	athlete: {
		type: String,
		required: false,
		default: null
	},
	sport: {
		type: [String],
		required: false
	},
	productDetail: {
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
	},
	reviews: {
		id: {
			type: Number,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		title: {
			type: [String],
			required: true
		},
		rating: {
			type: Number,
			required: true
		},
		comment: {
			type: String,
			required: true
		},
		date: {
			type: String,
			required: true
		}
	}
});

const Product = mongoose.model('Product', ProductSchema);
export {Product};
