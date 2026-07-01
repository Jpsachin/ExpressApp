import express, { type Express } from "express";
import { route } from "./routes/testRoutes.js";

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	console.log("Request", req.headers, req.method);

	res.send("The server is serving now");

	console.log("Response served ");
});

route(app);

interface ServerConfig {
	port: string | number;
}

const serverConfig: ServerConfig = {
	port: PORT
};

app.listen(serverConfig.port, () => {
	console.log("Your server is listening on port: ", PORT);
});
