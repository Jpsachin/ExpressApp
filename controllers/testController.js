let count = 0;
export const countController = (req, res) => {
	try {
		res.send(count++);
	} catch {
		res.send("Error occurred in the count module");
	}
};
