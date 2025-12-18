import "../../css/LoginForm.css";
import { register } from "../../services/utils/userAuth";
import { useState } from "react";

function RegisterForm({ onSwitch }) {
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errors, setErrors] = useState("");

  function onRegister(e) {
    e.preventDefault();

    setErrorUsername('');
    setErrorEmail('');
    setErrorPassword('');
    setErrors("");

    const formData = new FormData(e.target);
    const [username, email, password, repassword] = formData.values();

    if (!username || !email || !password) {
        setErrorUsername("All fields are required");
        setErrorEmail("All fields are required");
        setErrorPassword("All fields are required");
        setErrors('All fields are required');
        return;
    }

    if (password !== repassword) {
      setErrorPassword("Passwords do not match");
      setErrors('Passwords do not match');
      return;
    }

    const user = register(username, email, password);

    if (!user) {
      setErrorEmail("Email already exists");
      setErrors('Email already exists');
      return;
    }

    onSwitch(); // go to Login
  }

  return (
    <div className="wrapper">
      <form onSubmit={onRegister}>
        <h2>Register</h2>

        <div className={`input-field ${errorUsername ? "error" : ""}`}>
          <input name="username" type="text" required />
          <label>Username</label>
        </div>

        <div className={`input-field ${errorEmail ? "error" : ""}`}>
          <input name="email" type="text" required />
          <label>Email</label>
        </div>

        <div className={`input-field ${errorPassword ? "error" : ""}`}>
          <input name="password" type="password" required />
          <label>Password</label>
        </div>

        <div className={`input-field ${errorPassword ? "error" : ""}`}>
          <input name="repassword" type="password" required />
          <label>Repeat Password</label>
        </div>

        {errors && <p className="error-text">{errors}</p>}

        <button type="submit">Register</button>

        <div className="register">
          <p style={{ color: "#ffff" }}>
            Have an account?{" "}
            <span onClick={onSwitch} style={{ color: "#F5F5DD", cursor: "pointer" }}>Login</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;