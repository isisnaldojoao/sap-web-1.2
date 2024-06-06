import { RouterProvider } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import { AuthContextProvider } from "./contexts/auth";
import { router } from "./routes";

export function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <GlobalStyle />
    </AuthContextProvider>
  );
}
