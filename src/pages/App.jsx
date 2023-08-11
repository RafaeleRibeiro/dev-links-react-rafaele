import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import Social from "../components/socialLinks/socialLinks";
import Footer from "../components/footer/footer";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg"
import imgLigthMode from "../img/avatar2.jpg"

const App = () => {
  const [isLigthMode,setIsLigthMode] = useState(true);

  const toggleMode = () =>{
    setIsLigthMode((prevMode) => ! prevMode)
  };

const imgSrc = isLigthMode ? imgLigthMode :imgDarkMode;
const imgAlt = isLigthMode ? "Imagem no modo Claro" : "Imagem no modo escuro";
  
return(
  <div id="App" className={isLigthMode? "ligth" : ""}>
    <div id="container">
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@rrrfaele</Profile>
      <Switch mode={toggleMode} infoButton={isLigthMode}/>
      <div id="links">
        <ul>
          <Links link={"https://github.com"}>GitHub</Links>
          <Links link={"#"}>Instagram</Links>
          <Links link={"#"}>Portifolio</Links>
          <Links link={"#"}>Projetos</Links>

          
        </ul>
      </div>
      <div id="socialLinks">
        <Social href={"#"} icon ={"logo-github"}/>
        <Social href={"#"} icon ={"logo-instagram"}/>
        <Social href={"#"} icon ={"logo-tiktok"}/>
        <Social href={"#"} icon ={"logo-twitter"}/>

      </div>
      <Footer link={"#"}>rrrfaele</Footer>
    </div>
    </div>
  );
};

export default App;

