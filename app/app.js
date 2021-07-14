const express = require("express");
const app = express();
const PORT = 8000;
var cors = require("cors");
const AccpetPhotosRouter = require("./router/AccpetPhotos");
const UserRouter = require("./router/User");
const DateRouter = require("./router/Date");
// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
	res.set({
		"Cache-Control": "no-cache",
	});
	next();
});

app.use(
	cors({
		origin: "http://localhost:8000",
		credentials: true,
		methods: ["GET", "POST"],
		preflightContinue: true,
	})
);

app.use("/", AccpetPhotosRouter);
app.use("/", UserRouter);
app.use("/", DateRouter);
app.listen(8000, () => {
	console.log(`app running on port ${PORT}`);
});
