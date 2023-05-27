import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./app/redux/store";
import AppRouter from "./app/routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider
    domain={"dev-76holcf3ea4ld50v.jp.auth0.com"}
    clientId={"DTyznQIuT8pFccdd6BeRUNJxVwxkB1j6"}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </Auth0Provider>
);
