import logo from "../../assets/logo-home-page.svg";
import styles from "./styles.module.scss";
import moonIcon from "../../assets/moon-icon.svg";
import sunIcon from "../../assets/sun-icon.svg";
import { useState } from "react";

export const Header = () => {

  // dark mode
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    const html = document.querySelector('html');
    if(darkMode){
      html.classList.add('darkMode');
    } else {
      html.classList.remove('darkMode');
    }
  }
  toggleDarkMode();

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo Nu Kenzie" />
      {!darkMode ? (
        <img
          className={`darkModeButton ${styles.darkModeIcon}`}
          src={moonIcon}
          alt="Botão dark mode"
          onClick={() => setDarkMode(true)}
        />
      ) : (
        <img
          className={`darkModeButton ${styles.darkModeIcon}`}
          src={sunIcon}
          alt="Botão dark mode"
          onClick={() => setDarkMode(false)}
        />
      )}
    </header>
  );
};
