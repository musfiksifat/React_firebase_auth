import firebase from  'firebase/app';
import  "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAILYBEvU1xE9B_oRgHRDpEd82v9r4pySk",
    authDomain: "fir-auth-development-d9f70.firebaseapp.com",
    projectId: "fir-auth-development-d9f70",
    storageBucket: "fir-auth-development-d9f70.appspot.com",
    messagingSenderId: "583984842384",
    appId: "1:583984842384:web:1b6722d12c06baead07a15"
});

const auth = app.auth();
export {auth};
export default app;