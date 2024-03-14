import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import LoginForm from "./components/views/Login-Form/Login-form";
import RegisterForm from "./components/views/Register-Form/Register-Form";
import { useAuth } from "./AuthContext";
import MainPage from "./components/views/Main-Page/Main-page";

const PrivateRoute = ({ element }) => {
  const token = useAuth();
  return token ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/" element={<PrivateRoute element={<MainPage />} />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
