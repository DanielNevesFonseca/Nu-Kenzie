import styles from "./styles.module.scss";

export const TotalMoney = ({ totalValue }) => {
  return (
    <div className={`totalMoneySection ${styles.totalMoneySection}`}>
      <div className={styles.boxText}>
        <h3 className="title typeThree">Valor Total</h3>
        <p className="text body">O valor refere-se ao saldo</p>
      </div>
      <h3 className="title typeThree">
        {totalValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h3>
    </div>
  );
};
