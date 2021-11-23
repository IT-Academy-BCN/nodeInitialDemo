const express = require("express");
const path = require("path");
const { upload } = require("./multer/multer");
const cors = require("cors");
const { setCache, auth } = require("./middlewares/middleware");

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../public/views"));

// Applying middlewares for endpoint path: '/time'
app.use("/time", setCache);
app.use("/time", auth);
// Applying middleware CORS for all endpoints
app.use(cors());

// Endpoints
app.get("/", (req, res) => {
  res.send("Sprint 4 - IT Academy");
});

app.get("/user", (req, res) => {
  res.json({
    name: "Oscar",
    age: 27,
    url: `http://localhost:${port}/user`,
  });
});

app.get("/upload", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("image"), (req, res, next) => {
  res.send("Image Uploaded");
});

app.post("/time", express.json(), (req, res) => {
  console.log("Input from requester: ", req.body);
  const addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };
  const date = new Date();
  const month = date.getMonth() + 1; // Format 0 - 11 months
  res.json({
    time: addZero(date.getHours()) + ":" + addZero(date.getMinutes()),
    date: date.getDate() + "-" + month + "-" + date.getFullYear(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
