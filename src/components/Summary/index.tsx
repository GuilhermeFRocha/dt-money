import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
    const {transactions} = useTransactions();
  
  const summary = transactions.reduce((acc, transaction)=> {
    
    if (transaction.type === 'deposit') {
      acc.deposit += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdrawas += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposit: 0,
    withdrawas: 0,
    total: 0
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entry</p>
          <img src={incomeImg} alt="Entry" />
        </header>
        <strong>{new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(summary.deposit)}</strong>
      </div>

      <div>
        <header>
          <p>Exits</p>
          <img src={outcomeImg} alt="Exits" />
        </header>
        <strong>{new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(summary.withdrawas)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(summary.total)}</strong>
      </div>
    </Container>
  );
}
