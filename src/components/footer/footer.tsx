import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import iconoIns from "../../assets/icono-instagram.png";
import iconoWpp from "../../assets/icono-wpp.png";
import toast, { Toaster } from "react-hot-toast";

const openChat = (): boolean => {
  const message = encodeURIComponent(
    "Hola, gracias por comunicarte con Dolce. Déjanos tu mensaje y nos pondremos en contacto con vos lo antes posible. ¡Que tengas un lindo día! "
  );
  const whatsappLink = `https://wa.me/+541136281366?text=${message}`;
  window.open(whatsappLink, "_blank");
  return true;
};

export const FooterComponent: React.FC<{}> = () => {
  const [name, setName] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [mensaje, setMensaje] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!name || !mensaje || !email || !apellido || !telefono) {
      toast.error("Por favor complete los campos requeridos", {
        style: {
          borderRadius: "10px",
          backgroundColor: "#ef233c",
          color: "white",
        },
      });
      return;
    }

    const telefonoRegex = /^[0-9]+$/;

    if (telefono && !telefono.match(telefonoRegex)) {
      toast.error("El campo de teléfono sólo puede contener números", {
        style: {
          borderRadius: "10px",
          backgroundColor: "#ef233c",
          color: "white",
        },
      });
      return;
    }

    if (formRef.current) {
      emailjs
        .sendForm(
          "dolce_momento",
          "template_g0viowi",
          formRef.current,
          "hrj03V37XxSn7Tsqa"
        )
        .then(
          (result) => {
            toast.success("email enviado!", {
              style: {
                borderRadius: "10px",
                backgroundColor: "#c1fba4",
                color: "black",
              },
            });
          },

          (error) => {
            toast.error(
              "no se puedo mandar el email, por favor reintente de nuevo",
              {
                style: {
                  borderRadius: "10px",
                  backgroundColor: "#ef233c",
                  color: "white",
                },
              }
            );
          }
        );
    }
  };

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

      <ContainerAll ref={formRef} onSubmit={handleSubmit}>
        <ContainerForm>
          <ContainerInput>
            <Input
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              placeholder="Nombre"
              type="text"
            />

            <Input
              onChange={(e) => setApellido(e.target.value)}
              id="apellido"
              name="apellido"
              placeholder="Apellido"
              type="text"
            />
          </ContainerInput>

          <Textarea
            onChange={(e) => setMensaje(e.target.value)}
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje aqui... "
          />
          <ContainerInput>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              placeholder="Email"
            />
            <Input
              onChange={(e) => setTelefono(e.target.value)}
              id="telefono"
              name="telefono"
              placeholder="Telefono"
            />
          </ContainerInput>
          <ContainerButton>
            <Button type="submit">Enviar</Button>
          </ContainerButton>
        </ContainerForm>
      </ContainerAll>

      <Toaster />
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
  @media (max-width: 500px) {
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
  @media (max-width: 500px) {
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
  @media (max-width: 500px) {
    height: 100px;
    width: 200%;
  }
`;
const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media (max-width: 500px) {
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
  &:hover {
    background-color: #ffe5ec;
  }

  &:active {
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;
