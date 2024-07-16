import { Avatar, Button, Tooltip } from "antd";
import React from "react";
import styled from "styled-components";
import {
  UserOutlined,
  AntDesignOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Message } from "./Message";
import { RightOutlined } from "@ant-design/icons";

const ChatWindowStyled = styled.div`
  background-color: #313338;
  padding: 0 0;
  color: #d0d2d5;
  height: 100vh;
  position: relative;
  .btn__invite {
    color: white;
    padding: 0;
  }
`;

const ContentMessage = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 11px;
`;

const MessageList = styled.div`
  overflow-y: auto;
  max-height: 100%;
`;

export const ChatWindow = () => {
  return (
    <ChatWindowStyled>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          height: "56px",
          borderBottom: "1px solid white",
          padding: "10px",
        }}
      >
        <div className="">Room 1</div>
        <div className="">
          <div>
            <Button
              className="btn__invite"
              type="text"
              icon={<UserAddOutlined />}
            >
              Invite
            </Button>

            <Avatar.Group
              size="large"
              max={{
                count: 2,
                style: { color: "#f56a00", backgroundColor: "#fde3cf" },
              }}
            >
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{ backgroundColor: "#1677ff" }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
          </div>
        </div>
      </div>
      <ContentMessage>
        <MessageList>
          <Message
            text={"Hello mn"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Minh"}
          />
          <Message
            text={"Chao cu"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Chien"}
          />
          <Message
            text={"Nhoc ac"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Phat"}
          />
          <Message
            text={"Hello mn"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Minh"}
          />
          <Message
            text={"Chao cu"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Chien"}
          />
          <Message
            text={"Nhoc ac"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Phat"}
          />
          <Message
            text={"Hello mn"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Minh"}
          />
          <Message
            text={"Chao cu"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Chien"}
          />
          <Message
            text={"Nhoc ac"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Phat"}
          />
          <Message
            text={"Hello mn"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Minh"}
          />
          <Message
            text={"Chao cu"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Chien"}
          />
          <Message
            text={"Nhoc ac"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Phat"}
          />
          <Message
            text={"Hello mn"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Minh"}
          />
          <Message
            text={"Chao cu"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Chien"}
          />
          <Message
            text={"Nhoc ac"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Phat"}
          />
          <Message
            text={"Hello mn"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Minh"}
          />
          <Message
            text={"Chao cu"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Chien"}
          />
          <Message
            text={"Nhoc ac"}
            photoURL={null}
            createAt={"Today 11/05/2024"}
            displayName={"Phat"}
          />
        </MessageList>
        <div>
          <form style={{ position: "relative" }}>
            <input
              style={{
                // position: "absolute",
                // bottom: 27,
                // left: 0,
                height: 47,
                width: "97%",
                marginRight: 16,
                marginLeft: 16,
                backgroundColor: "#383a40",
                outline: "none",
                border: "none",
                color: "white",
                padding: "5px 30px",
              }}
              type="text"
              placeholder="Nhập tin nhắn"
            />
            <Button
              style={{
                position: "absolute",
                top: 10,
                right: 30,
                color: "white",
              }}
              icon={<RightOutlined />}
              type="text"
            />
          </form>
        </div>
      </ContentMessage>
    </ChatWindowStyled>
  );
};
