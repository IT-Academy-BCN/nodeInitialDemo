import currentTime from "../utils/currentTime";

const secret = (req, res) => {
 
    const date = {
        "date" : currentTime("date"),
        "time" : currentTime("time"),
    }
    res.status(200).send(date);
}

export default secret;