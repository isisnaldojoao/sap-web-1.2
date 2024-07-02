import { Navigate, createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "./layouts/auth";
import { AppLayout } from "./layouts/app";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { EditUser } from "./pages/EditUser";
import { ManagerPermissionsLevels } from "./pages/ManagePermissionsLevels";
import { EditPermissionLevel } from "./pages/EditPermissionLevel";
import { DownloadApps } from "./pages/DownloadApps";
import { Profile } from "./pages/Profile";
import { ProtectedLayout } from "./components/ProtectedLayout";

export const router = createBrowserRouter([
  
    {
      path: '/',
      element: <Navigate to="/auth/login" replace />,
    },
  {
    path: 'app',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <ProtectedLayout><Home /></ProtectedLayout>,
      },
      {
        path: 'home',
        element: <ProtectedLayout><Home /></ProtectedLayout>,
      },
      {
        path: 'users',
        children: [
          {
            index: true,
            element: <ProtectedLayout><Users /></ProtectedLayout>,
          },
          {
            path: ':userId/edit',
            element: <ProtectedLayout><EditUser /></ProtectedLayout>,
          },
        ]
      },
      {
        path: 'manager-permissions-levels',
        children: [
          {
            index: true,
            element: <ProtectedLayout><ManagerPermissionsLevels /></ProtectedLayout>,
          },
          {
            path: ':permissionLevelId/edit',
            element: <ProtectedLayout><EditPermissionLevel /></ProtectedLayout>,
          },
        ]
      },
      {
        path: 'download-apps',
        element: <ProtectedLayout> <DownloadApps /> </ProtectedLayout>,
      },
      {
        path: 'profile',
        element: <ProtectedLayout> <Profile /> </ProtectedLayout>,
      },
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
])