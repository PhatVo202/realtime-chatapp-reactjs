import { Avatar, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  margin-bottom: 10px;
  .author {
    margin-left: 5px;
    font-weight: bold;
    color: #d0d2d5;
  }
  .date {
    color: grey;
    margin-left: 10px;
    font-size: 11px;
  }
  .text {
    color: white;
    margin-top: 5px;
    margin-left: 30px;
  }
`;

export const Message = ({ text, photoURL, displayName, createAt }) => {
  return (
    <WrapperStyled>
      <div>
        <Avatar size={"large"} src={photoURL} />
        <Typography.Text className="author">{displayName}</Typography.Text>
        <Typography.Text className="date">{createAt}</Typography.Text>
      </div>
      <div>
        <Typography.Text className="text">{text}</Typography.Text>
      </div>
    </WrapperStyled>
  );
};
