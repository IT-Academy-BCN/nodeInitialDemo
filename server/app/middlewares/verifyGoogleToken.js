import { OAuth2Client } from "google-auth-library";

const verifyGoogleToken = async function(req, next) {
    if(req.body.token != null){
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

        const token = req.body.token;

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];

        return payload;
    }

    return null;
}

export default verifyGoogleToken;