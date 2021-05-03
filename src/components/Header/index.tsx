import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}


export function Header ({onOpenNewTransactionModal}: HeaderProps ){ //desestruturar a propriedade e repassar para botao
    return(
        <Container>
            <Content>
            <img src={logoImg} alt="dtmoney" />
            
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova Transação
            </button>

            </Content>
        </Container>
    )
}