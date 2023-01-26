import * as express from 'express';

import { readdir } from 'fs'

const route = express.Router();

route.get('/', (req: express.Request, res: express.Response) => {
	readdir('/sys/bus/usb/drivers/uvcvideo', { withFileTypes: true }, (err, files) => {
		if (err) {
			res.send([]);
		} else {
			res.send(files);
		}
	});
});

route.get('/:port/', (req: express.Request, res: express.Response) => {
	res.send('Get video device on port ' + req.params.port + '!');
});

export default route;
