import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const MONGO_URL = process.env.DATABASE_URL;

mongoose.connection.once('open', () => {
	console.log('MongoDB Connection Ready..🚀✅🚀❇️🚀');
});
mongoose.connection.on('error', (error) => {
	console.error('MongoDB Connection Failed..🚩🚨🚩🚨⛔⚠️⛔⚠️', error);
});

async function mongo_DB_Connect() {
	await mongoose.connect(MONGO_URL as string);
}

async function mongo_DB_Disconnect() {
	await mongoose.disconnect();
}
export {mongo_DB_Connect, mongo_DB_Disconnect};
