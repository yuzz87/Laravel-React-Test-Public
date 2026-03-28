import { useEffect, useState } from "react";
import { fetchMe } from "./api/auth";
import { getToken, removeToken } from "./api/client";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [authMode, setAuthMode] = useState("login");

  useEffect(() => {
    async function checkAuth() {
      const token = getToken();

      if (!token) {
        setCheckingAuth(false);
        return;
      }

      try {
        await fetchMe();
        setIsAuthenticated(true);
      } catch {
        removeToken();
        setIsAuthenticated(false);
      } finally {
        setCheckingAuth(false);
      }
    }

    checkAuth();
  }, []);

  if (checkingAuth) {
    return <p>Checking auth...</p>;
  }

  if (!isAuthenticated) {
    if (authMode === "register") {
      return (
        <RegisterPage
          onRegisterSuccess={() => {
            setIsAuthenticated(true);
          }}
          onMoveToLogin={() => {
            setAuthMode("login");
          }}
        />
      );
    }

    return (
      <LoginPage
        onLoginSuccess={() => {
          setIsAuthenticated(true);
        }}
        onMoveToRegister={() => {
          setAuthMode("register");
        }}
      />
    );
  }

  return (
    <TasksPage
      onLogoutSuccess={() => {
        setIsAuthenticated(false);
        setAuthMode("login");
      }}
    />
  );
}