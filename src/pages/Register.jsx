import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const Register = () => {
  const [err, seterr] = useState("");
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        inputs
      );
      console.log(res.data);
      navigate("/");
      setInputs("");
    } catch (error) {
      seterr(error.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="username"
          required
          type="text"
          placeholder="username"
        />
        <input
          onChange={handleChange}
          name="email"
          required
          type="email"
          placeholder="email"
        />
        <input
          onChange={handleChange}
          name="password"
          required
          type="password"
          placeholder="password"
        />
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
        <p>{err}</p>
        <span>
          Do you gave an account? <Link to="/login">Login.</Link>
        </span>
      </form>
    </div>
  );
};
