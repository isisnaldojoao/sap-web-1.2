import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { DownloadApps } from "./pages/DownloadApps";
import { ManagerPermissionsLevels } from "./pages/ManagePermissionsLevels";
import { AppLayout } from "./layouts/app";
import { Users } from "./pages/Users";
import { EditUser } from "./pages/EditUser";
import { Profile } from "./pages/Profile";
import { EditPermissionLevel } from "./pages/EditPermissionLevel";

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
          <Route path="/manager-permissions-levels">
            <Route index element={<ManagerPermissionsLevels />} />
            <Route 
              path=":permissionId/edit"
              element={<EditPermissionLevel />} 
            />
          </Route>
          <Route 
            path="/download-apps" 
            element={<DownloadApps />} 
          />
          <Route 
            path="/profile" 
            element={<Profile />} 
          />
        </Route>
      </Routes>
    </div>
  );
}
