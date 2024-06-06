import { createBrowserRouter } from "react-router-dom";

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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'users/',
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: ':userId',
            element: <EditUser />
          },
        ]
      },
      {
        path: 'manager-permissions-levels/',
        children: [
          {
            index: true,
            element: <ManagerPermissionsLevels />,
          },
          {
            path: ':permissionLevelId',
            element: <EditPermissionLevel />,
          },
        ]
      },
      {
        path: 'download-apps/',
        element: <DownloadApps />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])