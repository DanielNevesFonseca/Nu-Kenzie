import { Card } from "./Card";
import styles from "./styles.module.scss";

export const List = ({ transactions, removeTransaction }) => {
  return (
    <section className={`financialSummarySection ${styles.section}`}>
      <h3 className="title typeThree">Resumo Financeiro</h3>

      {transactions.length === 0 ? (
        <h2 className="title typeTwo">
          Você ainda não possui nenhum lançamento
        </h2>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <Card
              key={transaction.id}
              id={transaction.id}
              description={transaction.description}
              costValue={transaction.costValue}
              selectOption={transaction.selectOption}
              removeTransaction={removeTransaction}
            />
          ))}
        </ul>
      )}
    </section>
  );
};
