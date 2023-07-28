import styles from "./styles.module.scss";
import logo from "../../assets/logo-home-page.svg";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h4 className="title typeFour">
          &copy; Todos os Direitos Reservados - 2023
        </h4>
        <h4 className="title typeFour">
          Desenvolvido por Daniel Neves Fonseca
        </h4>
      </div>
      <img src={logo} alt="Logo Nu Kenzie" />
    </footer>
  );
};
