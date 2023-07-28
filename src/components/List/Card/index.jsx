import styles from "./styles.module.scss";

export const Card = ({
  description,
  id,
  costValue,
  selectOption,
  removeTransaction,
}) => {
  return (
    <li
      className={`${styles.transactionCard} ${
        selectOption === "1" ? styles.greenBorder : styles.redBorder
      }`}
    >
      <h3 className="title typeThree">{description}</h3>
      <p className="text body">{selectOption === "1" ? "Entrada" : "Saída"}</p>
      <h4 className="title typeFour">
        {Number(costValue).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h4>
      <button onClick={() => removeTransaction(id)} className="btnDelete">
        Excluir
      </button>
    </li>
  );
};
