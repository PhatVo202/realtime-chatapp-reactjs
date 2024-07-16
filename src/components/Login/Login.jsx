import React from "react";
import { Button, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import { db, FacebookAuth, GoogleAuth } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { addDocumentFireStore } from "../../firebase/services";

export const Login = () => {
  const handleLoginFB = async () => {
    const user = await FacebookAuth();
    console.log("facebook user: ", user);
    const {
      _tokenResponse: { isNewUser },
    } = user;
    if (isNewUser) {
      await addDocumentFireStore("users", {
        displayName: user.user.displayName,
        email: user.user.email,
        photoURL: user.user.photoURL,
        uid: user.user.displayName,
        providerId: user.providerId,
      });
      // await addDoc(collection(db, "users"), {
      //   displayName: user.user.displayName,
      //   email: user.user.email,
      //   photoURL: user.user.photoURL,
      //   uid: user.user.displayName,
      //   providerId: user.providerId,
      // });
    }
  };

  const handleLoginGG = async () => {
    const userGG = await GoogleAuth();
    console.log("Google user: ", userGG);
  };

  return (
    <div>
      <Row justify={"center"} span={8}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Discord Chat
          </Title>
          <Button
            onClick={handleLoginGG}
            style={{ width: "100%", marginBottom: 5 }}
          >
            Login Google
          </Button>
          <Button onClick={handleLoginFB} style={{ width: "100%" }}>
            Login Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
};
