import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);


`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 2rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between; //espaço entre todos itens dentro do meu content;

    button{
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.3s;

        &:hover{
        filter: brightness(0.9);
     }
    }

    

`;