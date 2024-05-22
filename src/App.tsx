import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { DownloadApps } from "./pages/DownloadApps";
import { ManagerPermissionsLevels } from "./pages/ManagePermissionsLevels";
import { AppLayout } from "./layouts/app";
import { Users } from "./pages/Users";
import { EditUser } from "./pages/EditUser";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/users">
            <Route index element={<Users />} />
            <Route 
              path=":userId/edit"
              element={<EditUser />} 
            />
          </Route>
          <Route
            path="/manager-permissions-levels"
            element={<ManagerPermissionsLevels />}
          />
          <Route 
            path="/download-apps" 
            element={<DownloadApps />} 
          />
        </Route>
      </Routes>
    </div>
  );
}
