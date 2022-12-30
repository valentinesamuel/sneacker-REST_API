import express, {Application, NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
import {shopRouter} from './v1/routes/shop.router';

const app: Application = express();
const PORT: Number = 3000;

app.use(morgan('combined'));
app.use(express.json());

app.use('/api/v1/shop', shopRouter);
app.use('/', (_req: Request, res: Response, _next: NextFunction) => {
	res.status(200).send({
		data: 'Hello from serve'
	});
});

const bootstrap = (): void => {
	try {
		//	await connectDB;
		app.listen(PORT, () => {
			console.log(
				`Server is listening on port ${PORT}...\nVisit http://localhost:${PORT}/`
			);
		});
	} catch (error) {
		console.log(error);
	}
};

bootstrap();
