import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable(){
    const [transactions, setTransactions] = useState<Transaction[]>([]); //meu state armazena um Array de transaction

    useEffect(() => { // não vamos utilizar o fetch, pois precisamos transformar tudo em .Json, por esse motivo vamos utilizar Axios (biblioteca especializada em requisições e respostas para a API)
        api.get('transactions') //caminho para rota de 'transactions'
        .then(response => setTransactions(response.data.transactions)) //lista a rota inteira
    }, []);
    return(
        <Container>
            <table>
              <thead>
                  <tr>
                      <th>Titulo</th>
                      <th>Valor</th>
                      <th>Categoria</th>
                      <th>Data</th>
                  </tr>
              </thead>

              <tbody>
                  {transactions.map(transaction => (
                    <tr key={transaction.id}> {/* sempre que usar MAP no react (modulo 01) o primeiro elemento do map no caso o <TR> recebe uma Key que coloca a informação unica para transaction ID*/}
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>
                            {new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.amount)} {/* formatação para reais */}
                        </td>
                        <td>{transaction.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR',{
                            }).format(new Date(transaction.createdAt))}
                        </td>
                    </tr>
                   ))}

              </tbody>
            </table>
        </Container>
    )

}