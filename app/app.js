const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const {
  checkMimeType,
  mediaError,
  isUpload,
  cacheControl,
  getCurrentTime,
} = require("./middlewares/middlewares");

const app = express();

const user = {
  name: "me",
  edat: 22,
};

// Accept CORS
app.use(cors());
// Parse the body
app.use(express.json());

app.use(
  fileUpload({
    createParentPath: true,
  })
);

// Middlewares to check correct uploading and handle upload errors
app.use("/upload", isUpload);
app.use("/upload", checkMimeType);
app.use("/upload", mediaError);
// Set Cache Control
app.use(cacheControl);

app.get("/users", (req, res) => {
  const { protocol, originalUrl: url } = req;
  const host = req.get("host");
  user.url = `${protocol}://${host}${url}`;
  res.send(user);
});

app.post("/upload", async (req, res) => {
  res.status(201).send({
    status: 201,
    message: "File is uploaded",
    mimetype: req.files.filesample.mimetype,
  });
});

app.post("/register", async (req, res) => {
  const currentTime = await getCurrentTime();
  res.send(JSON.stringify(currentTime));
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
