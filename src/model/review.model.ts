import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
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
});

const Review = mongoose.model('Review', ReviewSchema);
export {Review};
