import * as express from 'express';
import * as powerRoutes from './power';
import * as networkRoutes from './network';
import * as serialRoutes from './serial';
import * as videoRoutes from './video';

const app = express();
const port = 3000;

app.use(express.static('static'));

app.use('/api/power', powerRoutes.default);
app.use('/api/network', networkRoutes.default);
app.use('/api/serial', serialRoutes.default);
app.use('/api/video', videoRoutes.default);

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
app.get('/', (req: express.Request, res: express.Response) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
