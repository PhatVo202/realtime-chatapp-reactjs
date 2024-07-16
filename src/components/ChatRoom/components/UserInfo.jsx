import { Avatar, Button, Typography } from "antd";
import React, { useContext, useEffect } from "react";

import styled from "styled-components";
import { auth, db } from "../../../firebase/config";
import { AppContext } from "../../../context/app.context";
import { collection, onSnapshot } from "firebase/firestore";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;

  .username {
    color: white;
    margin-left: 5px;
  }
`;

export const UserInfo = () => {
  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      console.log(data);
    });
  }, []);
  const {
    user: { displayName, photoURL },
  } = useContext(AppContext);
  return (
    <WrapperStyled>
      <div className="">
        <span style={{ position: "relative" }}>
          <Avatar src={photoURL} size={64}>
            {photoURL ? "" : displayName?.charAt(0).toUpperCase()}
          </Avatar>
          <span
            style={{
              background: "rgb(36, 165, 90)",
              width: "20px",
              height: "20px",
              display: "inline-block",
              position: "absolute",
              bottom: "-24px",
              right: "5px",
              borderRadius: " 100%",
            }}
          ></span>
        </span>
        <Typography.Text className="username">{displayName}</Typography.Text>
      </div>
      <div className="">
        <Button ghost onClick={() => auth.signOut()}>
          Logout
        </Button>
      </div>
    </WrapperStyled>
  );
};
