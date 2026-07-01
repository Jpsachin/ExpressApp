import { type Express } from "express";
import { countController } from "../controllers/testController.js";

export const route = (app: Express) => {
	app.get("/count", countController);
};
