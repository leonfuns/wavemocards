import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/routing/PrivateRoute";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import Emotions from "./pages/Emotions";
import Login from "./pages/Login";
import Register from "./pages/user/Register";
import Profile from "./pages/user/Profile";
import Delete from "./pages/user/Delete";
import EmotionCards from "./pages/EmotionCards";
import NotFoundPage from "./pages/NotFoundPage";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/user/register";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-grow flex-1 bg-gray-100 dark:bg-gray-900">
        {window.scrollTo(0, 0)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/emotions" element={<Emotions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
          <Route
            path="/user/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/delete"
            element={
              <PrivateRoute>
                <Delete />
              </PrivateRoute>
            }
          />
          <Route
            path="/emotioncards"
            element={
              <PrivateRoute>
                <EmotionCards />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <AppContent />
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
