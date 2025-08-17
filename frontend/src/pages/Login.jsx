import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
        email,
        password,
      });
      setLoading(false);

      const token = res.data.token;
      const role = res.data.role;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role); // store role if needed later

      // ✅ Show success toast
      toast.success(res.data.msg || "Login successful");

      // ✅ Redirect based on role
      setTimeout(() => {
        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 1000);
    } catch (err) {
      const msg = err.response?.data?.msg || "Something went wrong.";
      toast.error(msg); // ❌ Show error toast
    }
  };

  return (
    <div className="container-fluid login-page bg-dark text-light">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="text-center mb-4">Login</h2>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Links */}
            <div className="text-center">
              <p className="mb-1">
                Forgot password?{" "}
                <a href="/forgot-password" className="text-danger fw-bold">Click Here</a>
              </p>
              <p>
                Don’t have an account?{" "}
                <a href="/signup" className="text-danger fw-bold">Click Here</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}
