const {getAdminApp,} = require('./firebase_admin')

const fireAuthService = (req, res, next) => {
    const app = getAdminApp();
    const idToken = req.headers['X-Api-Key'] || "";
    console.log('HERE')
    console.log(idToken)
    app.auth().verifyIdToken(idToken)
        .then(decodedToken => {
            const {uid} = decodedToken;

            next();
        })
        .catch(e => {
            res.status(401);
            res.json({'err': e})
        });
}

module.exports = {fireAuthService,}
