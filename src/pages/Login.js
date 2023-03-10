import { useState } from "react";
import styles from "../styles/login.module.css";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "../hooks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const { addToast } = useToasts();
  const auth = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoggingIn(true);

    if (!email || !password) {
      return addToast("Please enter both email & password...", {
        appearance: "error",
      });
    }

    const response = await auth.login(email, password);

    if (response.success) {
      addToast("Successfully Loggind in...", {
        appearance: "success",
      });
    } else {
      addToast(response.message, {
        appearance: "error",
      });
    }

    setLoggingIn(false);
  };
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}></span>
      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="password"
          placeholder="Password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        {/* once cliked button - it will diable till next refresh. */}
        <button disabled={loggingIn}>
          {loggingIn ? "Logging in...." : "Log In"}
        </button>
      </div>
    </form>
  );
};

export default Login;
