import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    padding: 2.5rem; /* 40px */
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;
 
const Titulo = styled.h1`
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1.5rem; /* 40px */
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 1rem; /* 32px */
    }
`;
 
const ContenedorHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
 
    @media(max-width: 60rem){ /* 950px */
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
 
        & > div {
            display: flex;
            margin-bottom: 1.25rem; /* 20px */
            justify-content: end;
        }
    }
`;
 
const ContenedorBotones = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ActionButton = styled.a`
  text-decoration: none;
  font-size: 30px;
  margin: 0 2px;
  width: 50px;
  height: 50px;
  line-height: 55px;
  text-align: center;
  justify-content: center;
  background: white;
  color: #f1f1f1;
  border-radius: 50%;
  //box-shadow: 2px 2px 5px rgba(0, 0, 0, .5);
  transition: all .4s ease-in-out;

  :hover {
    //transform: scale(1.15);
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  }
`;

export {Header, Titulo, ContenedorHeader, ContenedorBotones, ActionButton};