import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { useAuth } from "./AuthContext";
import MainPage from "./components/views/Main-Page/Main-page";
import LoginForm from "./components/views/Login-Form/Login-form";

const PrivateRoute = ({ element }) => {
  const { token } = useAuth();
  console.log("Token in PrivateRoute:", token);

  return token ? element : <Navigate to="/" />;
};

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute element={<MainPage />} />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
