const express = require("express");
const fileUpload = require("express-fileupload");
const {
  checkMimeType,
  mediaError,
  isUpload,
} = require("./app/middlewares/middlewares");

const app = express();

const user = {
  name: "me",
  edat: 22,
};

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(express.json());

// Middlewares to check correct uploading and handle upload errors
app.use("/upload", isUpload);
app.use("/upload", checkMimeType);
app.use("/upload", mediaError);

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
  res.set("Cache-Control", "no-cache");
  const abacate = req.body;
  res.send(JSON.stringify(abacate));
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
