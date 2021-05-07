import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox} from './style';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';



interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const { createTransaction } = useTransactions(); //puxando transations do context

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState(''); //criar um valor pra cada input que tiver
    const [type, setType] = useState('deposit') //sempre que preciso armanezar informação através de um clique sempre utilizar o STATE

    async function handleCreateNewTransaction(event: FormEvent){ //cadastro das transações
        event.preventDefault();

        await createTransaction({  //vai aguardar a função executar para poder fechar o modal, por isso criamos uma function async e um await na criação.
            title,
            amount,
            category,
            type,
        })
        //após executar function o modal vai fechar e retornar com valores originais
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        
        onRequestClose(); //fechar modal

    }
    return(
        // passar isOpen para abrir modal e passar onRequestClose para colocar atribuições do react-modal (fechar com ESC ou clicar fora do modal) 
        //usar repasse de componentes
            <Modal 
             isOpen={isOpen} 
             onRequestClose={onRequestClose}
             overlayClassName="react-modal-overlay" //passando classe com respectiva estilização do react-modal
             className="react-modal-content" 
            > 

            {/* button for close modal */}
            <button
             type="button"
             onClick={onRequestClose} 
             className="react-modal-close"> 
                 <img src={ closeImg } alt="Fechar modal"/>
            </button>

            {/* quando clico em onSubmit ele recarrega a tela...onSubmit leva todos os padrões event*/}
            <Container onSubmit={handleCreateNewTransaction}> {/*toda vez que clicar no button "cadastrar" ele vai executar onSubmit */}
                {/*overlay=> parte escuro/externa do modal...parte preta do modal. Existe uma propriedade chamada overlayClassName */}
                <h2>Cadastrar Transação</h2>
                <input
                  placeholder="Titulo"
                  value={title} //armazenado no state
                  onChange={event => setTitle(event.target.value)} //executa toda vez que o valor do input for alterado e salva dentro de title
                />
                <input
                  type="number"
                  placeholder="Valor"
                  value={amount} //armazenado no state
                  onChange={event => setAmount(Number(event.target.value))} //executa toda vez que o valor do input for alterado e salva dentro de value. Number para converter pra numeros
                />

                <TransactionTypeContainer>
                    <RadioBox //pode receber novas propriedades (posso dar os nomes que eu quiser)
                     type="button"
                     onClick={() => {setType('deposit'); }} //arrow function para reconhecer o clique
                     isActive={ type === 'deposit'} //passando uma propridade nova e estilizando ela.
                     activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>

                    </RadioBox>

                    <RadioBox 
                     type="button"
                     onClick={() => {setType('withdraw'); }} //arrow function para reconhecer o clique
                     isActive={ type === 'withdraw'}
                     activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>

                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                  placeholder="Categoria"                  
                  value={category} //armazenado no state
                  onChange={event => setCategory(event.target.value)} //executa toda vez que o valor do input for alterado e salva dentro de category
                />

                <button type="submit"> Cadastrar</button>
            </Container>
            </Modal>
    );

}