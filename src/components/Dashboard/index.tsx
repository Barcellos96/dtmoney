import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionTable";
import { Container } from "./style";

export function Dashboard(){
    return(
        <Container>
            <Summary />
            <TransactionsTable/>

        </Container>
    );
}