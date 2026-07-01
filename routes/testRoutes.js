import { countController } from "../controllers/testController.js";

export const route = (app) => {
	app.get("/count", countController);
};
