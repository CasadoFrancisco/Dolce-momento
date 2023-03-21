import React from "react";
import styled from "styled-components";

import iconoIns from "../../assets/icono-instagram.png";
import iconoWpp from "../../assets/icono-wpp.png";

const openChat = () => {
  const message = encodeURIComponent(
    "Hola, gracias por comunicarte con Dolce. Déjanos tu mensaje y nos pondremos en contacto con vos lo antes posible. ¡Que tengas un lindo día! "
  );
  const whatsappLink = `https://wa.me/+541136281366?text=${message}`;
  window.open(whatsappLink, "_blank");
};

export const FooterComponent: React.FC<{}> = () => {
  return (
    <ContainerFooter>
      <ContainerInfo>
        <ContainerInfo>
          <InfoContacto>
            <InfoTitle>CONTACTO</InfoTitle>
            <Info>dolcemomento.tortas@gmail.com</Info>
            <Info onClick={openChat}>+54 11 3628 1366</Info>
          </InfoContacto>
          <ContainerIcons>
            <a href="https://www.instagram.com/dolcemomento._/" target="_blank">
              {" "}
              <Icon src={iconoIns} />
            </a>
            <Icon src={iconoWpp} onClick={openChat} />
          </ContainerIcons>
        </ContainerInfo>
      </ContainerInfo>
      <ContainerAll>
        <ContainerForm>
          <ContainerInput>
            <Input placeholder="Nombre" />
            <Input placeholder="Apellido" />
          </ContainerInput>

          <Textarea placeholder="Escribe tu mensaje aqui... " />
          <ContainerInput>
            <Input placeholder="Email" />
            <Input placeholder="Telefono" />
          </ContainerInput>
          <ContainerButton>
            <Button>Enviar</Button>
          </ContainerButton>
        </ContainerForm>
      </ContainerAll>
    </ContainerFooter>
  );
};

const ContainerFooter = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;
  font-family: "Jost", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #56091f, #a11b3f, #d3505a);
  @media (max-width: 1000px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    height: 600px;
  }
`;
const ContainerInfo = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  @media (max-width: 1000px) {
  }
`;
const InfoContacto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color: white;
  height: 100%;
`;
const InfoTitle = styled.h2`
  font-size: 40px;
`;
const Info = styled.a`
  font-size: 20px;
  border-bottom: 1px solid;
  cursor: pointer;
  @media(max-width:500px){
margin-bottom: 10px;

}
`;
const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  cursor: pointer;
  height: 30px;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`;

const ContainerAll = styled.form`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media (max-width: 630px) {
    width: 50%;
  }
`;
const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 80%;
  @media (max-width: 1000px) {
    width: 60%;
  }
`;
const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }

`;
const Input = styled.input`
  font-family: "Jost", sans-serif;
  width: 320px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffb3c6;
  background-color: transparent;
  color: white;
  font-size: 15px;
  padding-left: 5px;
  ::placeholder {
    color: white;
  }
  @media (max-width: 630px) {
    width: 110%;
  }
  @media(max-width:500px){
width: 200%;
margin-bottom: 20px;

}
`;
const Textarea = styled.textarea`
  width: 99%;
  height: 40%;
  font-family: "Jost", sans-serif;
  background-color: transparent;
  border: 1px solid #ffb3c6;
  padding-left: 5px;
  color: white;

  ::placeholder {
    color: white;
  }
  @media (max-width: 1000px) {
    height: 30%;
    width: 110%;
  }
  @media(max-width:500px){
    height: 100px;
    width: 200%;

}
`;
const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media(max-width:500px){
    justify-content: center;

}
`;
const Button = styled.button`
  font-family: "Jost", sans-serif;
  font-size: 15px;
  font-weight: 500;
  padding: 5px 15px 5px;
  background-color: #ffc2d1;
  color: #56091f;
  border: 1px solid;
  transition: 1.5s, box-shadow 0.2s ease-in;

  &:active {
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;
