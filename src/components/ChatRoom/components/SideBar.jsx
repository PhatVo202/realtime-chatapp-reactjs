import React from "react";
import { UserInfo } from "./UserInfo";
import { RoomList } from "./RoomList";
import styled from "styled-components";

const SideBarStyled = styled.div({
  //   backgroundColor: "#B9D3EE",
  backgroundColor: "#2b2d31",
  color: "white",
  height: "100vh",
});

export const SideBar = () => {
  return (
    <SideBarStyled>
      <div className="row">
        <div className="col-12">
          <UserInfo />
        </div>
        <div className="col-12 mt-3">
          <RoomList />
        </div>
      </div>
    </SideBarStyled>
  );
};
