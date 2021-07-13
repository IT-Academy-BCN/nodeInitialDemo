import { __dirname } from "../config/localRoutes.js";

const showIndex = (req, res) => {
    res.sendFile('./public/index.html', { root: '/Users/raul/itsockets/nodeInitialDemo/app'});
}

export default showIndex;