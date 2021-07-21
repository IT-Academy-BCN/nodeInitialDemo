const app = require("./server");
const PORT = process.env.PORT || 8000;
const sequelize = require("./database/db");
app.listen(PORT, () => {
	console.log(` App runing on port http://localhost:${PORT}`);

	sequelize

		.sync({ force: false })
		.then(() => {
			console.log("Connection has been established successfully.");
		})
		.catch(err => {
			console.log("Oh no there is somthing went wrong" + err);
		});
});
