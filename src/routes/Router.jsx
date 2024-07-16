import React from "react";
import { useRoutes } from "react-router-dom";
import { ChatRoom } from "../components/ChatRoom/ChatRoom";
import { Login } from "../components/Login/Login";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <ChatRoom />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return routing;
}
