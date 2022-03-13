import { generateAccessToken } from "../../helpers/generate-jwt";

export const loginPost = (req, res) => {
    const { username, password } = req.body;
    const user = { username };
    console.log(user, password)

    if (username === 'admin' && password === '12345') {
        const accesToken = generateAccessToken(user);
        res.header('authorization', accesToken).json({
            msg: 'Authenticated user',
            token: accesToken
        })
    } else (
        res.json({
            msg: 'Wrong user'
        })
    )
};