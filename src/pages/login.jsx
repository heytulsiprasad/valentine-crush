import Button from "../components/Button";
import { firebaseAuth } from "../config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const { auth, setAuth, setCurrentUser } = useAuth();

  const handleClick = () => {
    const provider = new GoogleAuthProvider();

    if (!auth) {
      signInWithPopup(firebaseAuth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;
          setAuth(true);
          setCurrentUser(user);
          navigate("/dashboard");
        })
        .catch((error) => console.log(error));
    }
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
