import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg"
import imgLigthMode from "../img/avatar2.jpg"

const App = () => {
  const [isLigthMode,setIsLigthMode] = useState(false);

const imgSrc = isLigthMode ? imgLigthMode :imgDarkMode;
const imgAlt = isLigthMode ? "Imagem no modo Claro" : "Imagem no modo escuro";
  return(
    <div>
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@rrrfaele</Profile>
    </div>
  );
};

export default App;

