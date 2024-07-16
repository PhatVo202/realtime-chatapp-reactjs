import React from "react";
import { SideBar } from "./components/SideBar";
import { ChatWindow } from "./components/ChatWindow";

export const ChatRoom = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-2 px-0">
            <SideBar />
          </div>
          <div className="col-10 px-0">
            <ChatWindow />
          </div>
        </div>
      </div>
    </>
  );
};
