import user from "../../models/user/user.js";

const getUser = (req, res) => {
    const url = req.protocol + "://" + req.headers.host + req.originalUrl;
    user.user.url = url;
    res.json(user);
}

export default getUser;