import { Avatar, Button, Collapse, Tooltip, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const TypographyStyled = styled(Typography.Link)`
  display: block;
  text-align: left;
`;

export const RoomList = () => {
  return (
    <div>
      <Collapse ghost defaultActiveKey={["1"]}>
        <PanelStyled header="List Room" key={1} className="text-white">
          <TypographyStyled>
            <Tooltip placement="right" title={<span>Room 1</span>}>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JsTFaFNCeiIj10tXgRtVA7gVFIMb7ZJOZA&s"
                size={50}
              />
            </Tooltip>
          </TypographyStyled>
          <TypographyStyled>
            <Tooltip placement="right" title={<span>Room 2</span>}>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JsTFaFNCeiIj10tXgRtVA7gVFIMb7ZJOZA&s"
                size={50}
              />
            </Tooltip>
          </TypographyStyled>
          <TypographyStyled>
            <Tooltip placement="right" title={<span>Room 3</span>}>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JsTFaFNCeiIj10tXgRtVA7gVFIMb7ZJOZA&s"
                size={50}
              />
            </Tooltip>
          </TypographyStyled>
          <div className="text-center">
            <Button
              type="text"
              icon={<PlusCircleOutlined />}
              ghost
              className="add-room mt-3"
            >
              Add Room{" "}
            </Button>
          </div>
        </PanelStyled>
      </Collapse>
    </div>
  );
};
