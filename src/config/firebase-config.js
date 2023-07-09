const admin = require('firebase-admin');


// Configuración Firebase Admin SDK
const serviceAccount = require('../../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;