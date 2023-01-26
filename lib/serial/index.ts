import * as express from 'express';

import { readdir } from 'fs'

const route = express.Router();

route.get('/', (req: express.Request, res: express.Response) => {
	readdir('/dev/serial/by-path', { withFileTypes: true }, (err, files) => {
		if (err) {
			res.send([]);
		} else {
			res.send(files);
		}
	});
});

export default route;
