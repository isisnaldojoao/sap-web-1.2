import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { DownloadApps } from "./pages/DownloadApps";
import { ManagerPermissionsLevels } from "./pages/ManagePermissionsLevels";
import { AppLayout } from "./layouts/app";
import { EditUsers } from "./pages/EditUsers";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/edit-users" element={<EditUsers />} />
          <Route path="/download-apps" element={<DownloadApps />} />
          <Route
            path="/manager-permissions-levels"
            element={<ManagerPermissionsLevels />}
          />
        </Route>
      </Routes>
    </div>
  );
}
