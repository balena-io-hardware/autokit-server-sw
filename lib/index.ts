import * as express from "express";
import * as powerRoutes from "./power"
import * as networkRoutes from "./network"
import * as serialRoutes from "./serial"
import * as videoRoutes from "./video"

const app = express();
const port = 3000;

app.use(express.static("static"));

app.use("/api/power", powerRoutes.default);
app.use("/api/network", networkRoutes.default);
app.use("/api/serial", serialRoutes.default);
app.use("/api/video", videoRoutes.default);


app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
