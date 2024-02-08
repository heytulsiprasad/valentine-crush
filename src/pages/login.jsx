import Button from "../components/Button";
import app from "../config/firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log({ user });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <main className="grow flex flex-col items-center justify-center">
      <Button onClick={handleClick} small={false}>
        Sign in with Google
      </Button>
    </main>
  );
}

export default Login;
