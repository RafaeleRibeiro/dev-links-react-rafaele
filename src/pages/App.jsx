import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg"
import imgLigthMode from "../img/avatar2.jpg"

const App = () => {
  const [isLigthMode,setIsLigthMode] = useState(false);

const imgSrc = isLigthMode ? imgLigthMode :imgDarkMode;
const imgAlt = isLigthMode ? "Imagem no modo Claro" : "Imagem no modo escuro";
  
return(
    <div id="container">
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@rrrfaele</Profile>
      <Switch></Switch>
      <div id="links">
        <ul>
          <Links link={"https://github.com"}>GitHub</Links>
          <Links link={"#"}>Instagram</Links>
          <Links link={"#"}>Portifolio</Links>
          <Links link={"#"}>Projetos</Links>

          
        </ul>
      </div>
    </div>
  );
};

export default App;

