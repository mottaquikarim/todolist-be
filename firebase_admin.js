const admin = require("firebase-admin");

const serviceAccount = require("./todolist-api-key.json");

const getAdminApp = (function() {
    let authService = null;
    return function(fireDbUrl) {
        if (!authService) {
            authService = admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: fireDbUrl,
            }, 'authService');
        }

        return authService;
    }
})(); // #IIFE

module.exports = {getAdminApp,};
