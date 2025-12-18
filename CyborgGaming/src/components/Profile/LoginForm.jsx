import "../../css/LoginForm.css";
import { login } from "../../services/utils/userAuth";
import { useState } from "react";

function LoginForm({ onSwitch }) {
  const [error, setError] = useState("");

  function onLogin(e) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const [email, password] = formData.values();

    if (!email || !password) {
        setError("All fields are required");
        return;
    }

    const user = login(email, password);

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    window.location.reload();
  }

  return (
    <div className="wrapper">
      <form onSubmit={onLogin}>
        <h2>Login</h2>

        <div className={`input-field ${error ? "error" : ""}`}>
          <input name="email" type="text" required />
          <label>Email</label>
        </div>

        <div className={`input-field ${error ? "error" : ""}`}>
          <input name="password" type="password" required />
          <label>Password</label>
        </div>

        {error && <p className="error-text">{error}</p>}

        <button type="submit">Log In</button>

        <div className="register">
            <p style={{ color: "#ffff" }}>
                Don't have an account?{" "}
                <span onClick={onSwitch} style={{ color: "#F5F5DD", cursor: "pointer" }}>
                Register
                </span>
            </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;