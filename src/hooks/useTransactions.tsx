import { createContext, useEffect, useState, ReactNode, useContext} from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit <Transaction, 'id' | 'createdAt'>; //omitir o que irei usar de outra interface

interface TransactionProviderProps {
    children: ReactNode; //aceita qlqr tipo de conteudo react...
}

interface TransactionsContextData { //qual coteudo tenho dentro do contexto
    transactions: Transaction[]; 
    createTransaction: (transaction: TransactionInput) => Promise<void>; //void quer dizer uma função sem retorno
}

export const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
); 

// <-- valor padrão para acessar o contexto
//conseguimos acessar contexto a partir de qualquer componente da nossa aplicação, mas para que qualquer componente tenha acesso precisamos colocar por volta dos componentes o .provider

export function TransactionProvider({ children }: TransactionProviderProps){ //logica de carregamento de dados está nesta function
    const [transactions, setTransactions] = useState<Transaction[]>([]); //meu state armazena um Array de transaction //todos dados da transação estao aqui

    useEffect(() => { // não vamos utilizar o fetch, pois precisamos transformar tudo em .Json, por esse motivo vamos utilizar Axios (biblioteca especializada em requisições e respostas para a API)
        api.get('transactions') //caminho para rota de 'transactions'
        .then(response => setTransactions(response.data.transactions)) //lista a rota inteira //salvar transações dentro do state
    }, []);


async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date(),

    }) //chamada API, criação das transactions via <Modal></Modal>
    const { transaction } = response.data; //acessando dados de dentro do <Axios>

    setTransactions([
        ...transactions, //copiar informações
        transaction //adicionar informações
    ]); //sempre que eu quero adicionar uma nova informa
}

    return(
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {/*significa que aceita valores aqui dentro*/}
            {children} 
        </TransactionContext.Provider>
    );
}

export function useTransactions(){ //um hook no react sempre pode utilizar de outros hooks
    const context = useContext(TransactionContext);

    return context;

}