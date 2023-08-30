import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import Main from "./module/Main";
import PublicRoute from "./routes/PublicRoute";
import Login from "./module/login/Login";
import PrivateRoute from "./routes/PrivateRoute";
import "admin-lte/dist/js/adminlte";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Rotas Privadas */}
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Main />} />
            <Route path="/:slug?/:params?/:action?" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        autoClose={3000}
        draggable={false}
        position="bottom-center"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
