import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';


import { Container } from "./styles";

export function Summary(){
    const { transactions } = useTransactions(); //valores que estao armazenados no contexto

    // const totalDeposits = transactions.reduce((acc, transaction) => { //acc = acumulator
    //     if(transaction.type === 'deposit') { //se transação do tipo = deposito retorna acumulator + montante da transação, se nao retorna 0
    //         return acc + transaction.amount;
    //     }
    //     return acc
    // }, 0);

    //reduzindo toda function de soma acima para a funtion de soma abaixo

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;

        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="Entradas"/>
            </header>
            <strong>
            {new Intl.NumberFormat('pt-BR',{
                style: 'currency',
                currency: 'BRL'
            }).format(summary.deposits)} {/* formatação para reais */}
            </strong>
        </div>

        <div>
            <header>
                <p>Saídas</p>
                <img src={outcomeImg} alt="Saídas"/>
            </header>
            <strong> 
                -
            {new Intl.NumberFormat('pt-BR',{
                style: 'currency',
                currency: 'BRL'
            }).format(summary.withdraws)} {/* formatação para reais */}
            </strong>
        </div>

        <div className="highligh-background">
            <header >
                <p>Total</p>
                <img src={totalImg} alt="Total"/>
            </header>
            <strong>
            {new Intl.NumberFormat('pt-BR',{
                style: 'currency',
                currency: 'BRL'
            }).format(summary.total)} {/* formatação para reais */}
            </strong>
        </div>


    </Container>
    )
}