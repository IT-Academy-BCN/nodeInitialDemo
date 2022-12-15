import path from "path";

const __dirname = path.resolve();

const uploadFile = (req, res) => {
    if (!req.files) {
        return res.status(400).send("No files were uploaded.");
    }

    const file = req.files.myFile;
    const path = __dirname + "/uploads/" + file.name;
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/gif") {
        file.mv(path, (err) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send({status: "success", path: path});
        });
    } else {
        return res.status(400).send("File type not supported.");
    }
};

export default uploadFile;
