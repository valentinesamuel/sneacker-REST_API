import express, {Application, NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import {shopRouter} from './v1/routes/shop.router';
import {mongo_DB_Connect} from './config/mongodb';
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT_NUMBER;

app.use(morgan('combined'));
app.use(express.json());

app.use('/api/v1/shop', shopRouter);
app.use('/', (_req: Request, res: Response, _next: NextFunction) => {
	res.status(200).send({
		data: 'Hello from serve'
	});
});

const bootstrap = async () => {
	try {
		await mongo_DB_Connect();
		app.listen(PORT, () => {
			console.log(
				`Server is listening on port ${PORT}...\nVisit http://localhost:${PORT}/`
			);
		});
	} catch (error) {
		console.log(error);
	}
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
