import * as express from 'express';

const route = express.Router();

route.get('/', (req: express.Request, res: express.Response) => {
	res.send('Hello Power!');
});

export default route;
