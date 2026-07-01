import { Request, Response } from "express";

let count = 0;
export const countController = (req: Request, res: Response) => {
	try {
		res.send(count++);
	} catch {
		res.send("Error occurred in the count module");
	}
};
