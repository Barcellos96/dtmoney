import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable(){
    useEffect(() => { // não vamos utilizar o fetch, pois precisamos transformar tudo em .Json, por esse motivo vamos utilizar Axios (biblioteca especializada em requisições e respostas para a API)
        api.get('transactions')
        .then(response => console.log(response.data))
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
                  <tr>
                      <td>Desenvolvimento WebSite</td>
                      <td className="deposit">R$12.000</td>
                      <td>Desenvolvimento</td>
                      <td>20/12/2021</td>
                  </tr>

                  <tr>
                      <td>Aluguel</td>
                      <td className="withdraw">R$1.000</td>
                      <td>Casa</td>
                      <td>20/12/2021</td>
                  </tr>

              </tbody>
            </table>
        </Container>
    )

}