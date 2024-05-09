import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { DownloadApps } from "./pages/DownloadApps";
import { ManagerPermissionsLevels } from "./pages/ManagePermissionsLevels";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/download-apps" element={<DownloadApps />} />
        <Route
          path="/manager-permissions-levels"
          element={<ManagerPermissionsLevels />}
        />
      </Routes>
    </div>
  );
}
