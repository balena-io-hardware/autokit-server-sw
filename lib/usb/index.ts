import * as express from 'express';
import { exec } from 'child_process';

import { readdir } from 'fs'

const route = express.Router();

route.get('/devices', (req: express.Request, res: express.Response) => {
	res.sendFile('/var/run/autokit/devices');
});

route.post('/update', (req: express.Request, res: express.Response) => {
	exec("udevadm trigger", (err, stdout, stderr) => {
		if (err) {
			res.status(500).send({ status: "internal error", message: err.message });
		} else if (stderr) {
			res.status(500).send({ status: "error", output: stderr });
		}
		res.send({ status: "success", output: stdout});
	});
});

export default route;
