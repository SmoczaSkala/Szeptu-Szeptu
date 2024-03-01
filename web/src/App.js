import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { useAuth } from "./AuthContext";
import MainPage from "./components/views/Main-Page/Main-page";
import LoginForm from "./components/views/Login-Form/Login-form";
import Register from "./components/Register/Register";

const PrivateRoute = ({ element }) => {
  const { token } = useAuth();
  console.log("Token in PrivateRoute:", token);

  return token ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div className="App">
      {/* <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute element={<MainPage />} />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider> */}
      <MainPage />
    </div>
  );
};

export default App;
