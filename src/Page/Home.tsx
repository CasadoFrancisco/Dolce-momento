import React from "react";
import styled from "styled-components";
import { NavbarComponent } from "../components/navbar/NavBar";
import {NavbarWithMessage} from "../components/Upnavbar"


export const HomeComponent: React.FC<{}> = () =>{
    return(
    <>
     <NavbarWithMessage/>
     <NavbarComponent/>
    </>
    
    )
}

const ContainerHome = styled.div``;