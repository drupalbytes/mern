import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.BACKEND_URL}/api/auth/reset-password/${token}`,
        { password }
      );

      toast.success(response.data.msg || "Password reset successful", {
        onClose: () => navigate("/login"), // redirect after toast closes
      });
    } catch (err) {
      console.error(err);
      const msg =
        err.response?.data?.msg || "Failed to reset password. Please try again.";
      toast.error(msg);
    }
  };

  return (
    <div className="container-fluid reset-page bg-dark text-light">
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="text-center mb-4">Reset Your Password</h2>
        
        <form onSubmit={handleReset}>
            <div className="mb-3">            
            <label htmlFor="NewPassword" className="form-label">New Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
             </div>
            <button className="btn btn-primary" type="submit">
            Reset Password
            </button>
        </form>

        {/* Toast container for notifications */}
        <ToastContainer position="top-center" autoClose={3000} />
        </div>
    </div>
    </div>
   
  );
}
