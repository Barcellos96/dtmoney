import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox} from './style';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';



interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType] = useState('deposit') //sempre que preciso armanezar informação através de um clique sempre utilizar o STATE


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

            <Container>
                {/*overlay=> parte escuro/externa do modal...parte preta do modal. Existe uma propriedade chamada overlayClassName */}
                <h2>Cadastrar Transação</h2>
                <input placeholder="Titulo"></input>

                <input type="number" placeholder="Valor"></input>

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

                <input placeholder="Categoria"></input>

                <button type="submit"> Cadastrar</button>
            </Container>
            </Modal>
    );

}