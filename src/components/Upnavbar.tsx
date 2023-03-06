import React, { useState, useEffect } from "react";
import styled from "styled-components";

const messages = [
  "Pedidos con 48 hs de anticipacion ⏳",
  "🎂 Consultanos por eventos 🎂",
  "Consultarnos por disponibilidad en el dia",
];

export const NavbarWithMessage: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex =
        (messages.indexOf(currentMessage) + 1) % messages.length;
      setCurrentMessage(messages[nextIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentMessage]);

  return (
    <>
      <Container>
        <Message>{currentMessage}</Message>
      </Container>
    </>
  );
};
const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc2d1;
  font-family: "Shantell Sans", cursive;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  position: absolute;
`;

const Message = styled.div`
  color: #56091f;
`;
