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
import { AuthProvider } from "./context/AuthProvider";
import { ProtectedLayout } from "./components/ProtectedLayout";

export function App() {
  return (
      <AuthProvider>
        <div className="App">
            <GlobalStyle />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<AppLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/users">
                  <Route index element={<Users />} />
                  <Route path=":userId/edit" element={<ProtectedLayout><EditUser /></ProtectedLayout>} />
                </Route>
                <Route
                  path="/manager-permissions-levels"
                  element={<ProtectedLayout><ManagerPermissionsLevels /></ProtectedLayout>}
                />
                <Route 
                  path="/download-apps" 
                  element={<ProtectedLayout><DownloadApps /></ProtectedLayout>} 
                />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
        </div>
      </AuthProvider> // AuthProvider
  );
}
