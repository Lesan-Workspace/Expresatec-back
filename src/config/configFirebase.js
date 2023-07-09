import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();



assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: DATABASE_URL,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    }
}

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

const firebaseConfig = {
  apiKey: "AIzaSyB5FCfI4W8wOf2o12GfCAQAnLWAXSfL-zA",
  authDomain: "pre-tesis-486cf.firebaseapp.com",
  projectId: "pre-tesis-486cf",
  storageBucket: "pre-tesis-486cf.appspot.com",
  messagingSenderId: "399671616506",
  appId: "1:399671616506:web:f27e1a493a281033e37a43",
  measurementId: "G-L6C62NZPWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);