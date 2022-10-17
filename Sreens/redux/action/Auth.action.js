import auth from '@react-native-firebase/auth';
import * as ActionTypes from '../ActionType'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const signupUser = (data) => (dispatch) => {
  // console.log(data.email, data.password, data.name);
  try {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password, data.name)
      .then(() => {
        auth()
          .onAuthStateChanged((user) => {
            user.sendEmailVerification()
              .then(dispatch({ type: ActionTypes.EMAIL_VERIFICATION, payload: { user, authMsg: "Please verify your email." } }))
          })
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  } catch (e) {
    console.log(e);
  }
}

export const LoginUser = (data) => (dispatch) => {
  try {
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        if (user.user.emailVerified) {
          // console.log("in actionnnnnnnnnnnn",  JSON.stringify(user.user));
          AsyncStorage.setItem("user", "Valid")
          dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: { user: user.user, authMsg: "Login successfull." } })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  } catch (error) {

  }
}

export const googleLogin = () => async (dispatch) => {
  console.log("xxxxxxxx");
  try {
    const { idToken } = await GoogleSignin.signIn();

    console.log("idTokenidTokenidToken", idToken);
    
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    console.log("googleCredentialgoogleCredential", googleCredential);
    // Sign-in the user with the credential
    auth().signInWithCredential(googleCredential)
      .then((user) => dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: { user: user.user, authMsg: "Login successfull." } }))
  } catch (error) {
    console.log("errorerrorerror", error);
  }
  // dispatch({type: ActionTypes.LOGIN_SUCCESS})
}


export const signoutAction = () => async (dispatch) => {
  console.log("done");
  try{
   auth()
   .signOut()
   .then(async() => {
    await AsyncStorage.clear();
    dispatch({type: ActionTypes.LOGOUT_SUCCESS, payload: {authMsg: 'Logout successfull.'}})
   })
   .catch((error)=> console.log(error))
       
  }catch(error){
    console.log(error);
  }
}

