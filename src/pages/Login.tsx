import Button from '../components/Button';
import app from '../config/firebase';
import clsx from 'clsx';
import React from "react"
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';

function Login() {

  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // console.log({ user });
      })
      .catch((error) => console.log(error));
  };

  return (
    <main className="h-screen w-screen flex items-center justify-center bg-white">
      <Button onClick={handleClick} small={false}>Sign in with Google</Button>
    </main>
  );
}

export default Login;
