import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const DEFAULT_STATE = {
  isLoading: true,
  user: [],
};

export const AppContext = createContext(DEFAULT_STATE);

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(DEFAULT_STATE.user);
  const [isLoading, setIsLoading] = useState(DEFAULT_STATE.isLoading);

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log({ ContextUser: user });
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        navigate("/");
      } else {
        setIsLoading(false);
        navigate("/login");
      }
    });

    return () => {
      unsubscribed();
    };
  }, [navigate]);

  return (
    <AppContext.Provider
      value={{
        user,
        isLoading,
        setIsLoading,
      }}
    >
      {isLoading && (
        <Spin
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 999,
          }}
          indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};
