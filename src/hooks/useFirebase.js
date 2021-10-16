import {
    getAuth,
    // GithubAuthProvider,
    GoogleAuthProvider,
    TwitterAuthProvider,
    onAuthStateChanged, 
    signInWithPopup, 
    // signOut
  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const twitterProvider = new TwitterAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
        .catch(error => setError(error.message));
    }

    const twitterSignIn = () => {
      signInWithPopup(auth, twitterProvider)
      .then(result => setUser(result.user))
      .catch(error => setError(error.message))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
          if (user) {
            setUser({});
          }
        });
      }, [auth]);

    return {
        user,
        error,
        googleSignIn,
        twitterSignIn
    }
};

export default useFirebase;