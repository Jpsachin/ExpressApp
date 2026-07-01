import express from "express";
import { route } from "./routes/testRoutes.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	console.log("Request", req.headers, req.method);

	res.send("The server is serving now");

	console.log("Response served ");
});

route(app);

app.listen(PORT, (req, res) => {
	console.log("Your server is listening on port: ", PORT);
});
