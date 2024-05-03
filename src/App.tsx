import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { DownloadApps } from "./pages/DownloadApps";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/download-apps" element={<DownloadApps />} />
      </Routes>
    </div>
  );
}
