import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const CenterLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="center-wrapper">
      <main className="center-content">
        <h1>Login</h1>
        <button onClick={() => navigate('/dashboard')}>Login</button>
        <Outlet />
      </main>
    </div>
  );
};

export default CenterLayout;