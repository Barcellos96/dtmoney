import styled from 'styled-components';
import { darken, transparentize} from 'polished';

export const Container = styled.form `
//sempre pegando as informações do FIGMA como orientação do designer
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body); 
        }

        & + input{ //todo input que tiver antes do ultimo input
        margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }

    }
`;

export const TransactionTypeContainer = styled.div` //feito uma outra "const" pois estou criando um container diferente para os buttons dentro do modal;
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red'; //para alterar as cores de fundo
}

const colors = { //para alterar as cores de fundo
    green: '#33CC95',
    red: '#E52E4D'
};

// para passar a props no styled components utilizar sinal de maior e menor <  >
export const RadioBox = styled.button<RadioBoxProps>`
     height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${(props) => props.isActive 
            ? transparentize(0.9, colors[props.activeColor]) //transparentize é diferente de opacity, pois opacity aplica no botao inteiro e nao apenas no background
            : 'transparent'
        }; // se eu passar "props" chama automaticamente todas propriedades do meu componente //quando nao coloco {} ocorre return automatico // colocar o conteudo em '' aspas simples pois é JS e nao CSS

        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s;

        &:hover { //nao posso usar filter, pois nao quero escurecer o botao por completo.
            border-color: ${darken(0.2, "#d7d7d7")}; //essa interpolação funciona, pois estou usando acento agudo("aspas") 
            //nessa interpolação digo que quero escurecer a bordar quando HOVER
        }

        img{
            width: 20px;
            height: 20px;
        }

        span{
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }

`;