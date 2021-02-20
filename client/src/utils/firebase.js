// These samples are intended for Web so this import would normally be
// done in HTML however using modules here is more convenient for
// ensuring sample correctness offline.
/* eslint-disable */
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "green-creds.firebaseapp.com",
    projectId: "green-creds",
    storageBucket: "green-creds.appspot.com",
    messagingSenderId: "705937904991",
    appId: "1:705937904991:web:d105d61ad835c5600712ea",
};

console.log("Init completed!");

firebase.initializeApp(firebaseConfig);

// Mask the global 'window' for this snippet file
const window = {
    recaptchaVerifier: undefined,
};

export function recaptchaVerifierInvisible() {
    function onSignInSubmit() {
        // TODO(you): Implement
        console.log("SIGN IN !");
    }

    // [START auth_phone_recaptcha_verifier_invisible]
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "sign-in-button",
        {
            size: "invisible",
            callback: (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
            },
        }
    );
    // [END auth_phone_recaptcha_verifier_invisible]
}

function recaptchaVerifierVisible() {
    // [START auth_phone_recaptcha_verifier_visible]
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
            size: "normal",
            callback: (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
            },
            "expired-callback": () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
            },
        }
    );
    // [END auth_phone_recaptcha_verifier_visible]
}

function recaptchaVerifierSimple() {
    // [START auth_phone_recaptcha_verifier_simple]
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
    );
    // [END auth_phone_recaptcha_verifier_simple]
}

function recaptchaRender() {
    /** @type {firebase.auth.RecaptchaVerifier} */
    const { recaptchaVerifier } = window;

    // [START auth_phone_recaptcha_render]
    recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
    });
    // [END auth_phone_recaptcha_render]
}

export async function phoneSignIn(userPhoneNumber) {
    function getPhoneNumberFromUserInput() {
        return userPhoneNumber;
    }

    // [START auth_phone_signin]
    const phoneNumber = getPhoneNumberFromUserInput();
    const appVerifier = window.recaptchaVerifier;
    const firebaseSignin = await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            localStorage.setItem("otpVerification", confirmationResult);
            console.log("DAYUM, SNE THE OTP");
            return true;
            // ...
        })
        .catch((error) => {
            // Error; SMS not sent
            // ...
            console.log("some error bruh", error);
            return false;
        });
    return firebaseSignin;
    // [END auth_phone_signin]
}

export function verifyCode(verificationUserCode) {
    /** @type {firebase.auth.ConfirmationResult} */
    const { confirmationResult } = window;

    // [START auth_phone_verify_code]
    const code = verificationUserCode;
    confirmationResult
        .confirm(code)
        .then((result) => {
            // User signed in successfully.
            const { user } = result;
            console.log("user");
            // ...
        })
        .catch((error) => {
            console.log("some error bruh", error);
            // User couldn't sign in (bad verification code?)
            // ...
        });
    // [END auth_phone_verify_code]
}

function getRecaptchaResponse() {
    const recaptchaWidgetId = "...";
    const grecaptcha = {};

    // [START auth_get_recaptcha_response]
    const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);
    // [END auth_get_recaptcha_response]
}
