// import logo from "./logo.svg";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free";
import "./css/sb-admin-2.min.css";
import "bootstrap/dist/css/bootstrap.css";
import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
