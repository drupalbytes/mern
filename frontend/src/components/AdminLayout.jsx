import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MdAddBox, MdPeople } from "react-icons/md"; // Icons
import adminBg from "../assets/admin-panel.jpg";
import logo from "../assets/restaurant-logo.png";

const AdminLayout = () => {
  const username = "admin"; // Replace with real user context or state
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          backgroundColor: "#1e1e1e",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px"
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textAlign: "center", marginBottom: "30px" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "150px", height: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* Sidebar Links */}
        <nav style={{ width: "100%", paddingLeft: "20px" }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="add-menu-item" style={linkStyle}>
                <MdAddBox style={iconStyle} />
                Add Menu Item
              </Link>
            </li>
            <li>
              <Link to="manage-users" style={linkStyle}>
                <MdPeople style={iconStyle} />
                Manage Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Area (Header + Content) */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div
          style={{
            height: "60px",
            backgroundColor: "#1e1e1e",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px"
          }}
        >
          <h2 style={{ margin: 0, color: "#37b59d" }}>Admin Dashboard</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span>Welcome, {username}</span>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            backgroundImage: `url(${adminBg})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom right",
            color: "#fff",
            overflowY: "auto"
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

// Reusable styles
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px 0"
};

const iconStyle = {
  fontSize: "20px"
};

export default AdminLayout;
