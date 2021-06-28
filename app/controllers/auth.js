const controller = require('./controllerUser');
const { OAuth2Client, UserRefreshClient } = require('google-auth-library');
const CLIENT_ID =
  '958038213628-eqrn87vh7a5rma5r9t26scnc7oja69k0.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

const validatetoken = (req, res) => {
  let token = req.body.token;
  let user = {};
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];

    user.username = payload.given_name;
    user.email = payload.email;
  }
  verify()
    .then(() => {
      controller.createUser(user);
      //res.cookie('session-token', token);
      res.send('success');

      res.status(200);
    })
    .catch(console.error);
};

module.exports = validatetoken;
