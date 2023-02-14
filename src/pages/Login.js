import { useState } from "react";
import styles from "../styles/login.module.css";
import { useToasts } from "react-toast-notifications";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const { addToast } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoggingIn(true);

    if (!email || !password) {
      return addToast("Please enter both email & password...", {
        appearance: "error",
        // autoDismiss: true,
      });
    }
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

      <div className={styles.field} disabled={loggingIn}>
        <button>{loggingIn ? "Logging in...." : "Log In"}</button>
      </div>
    </form>
  );
};

export default Login;
