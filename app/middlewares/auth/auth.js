import auth from "basic-auth";

const isAuthenticated = (req, res, next) => {

    const user = auth(req);

    if (user === undefined || user.name !== "Cristian" || user.pass !== "pass") {
        res.statusCode = 401;
        res.setHeader("WWW-Authenticate", "Basic realm='Access to the secret info'");
        return res.json("Unauthorized");
    }
    next();

}

export default isAuthenticated;
