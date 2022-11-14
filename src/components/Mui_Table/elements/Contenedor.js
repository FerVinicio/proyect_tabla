import styled from 'styled-components';

const Contenedor = styled.div`
    background: #fff;
    border-radius: 0.625rem; /* 10px */
    box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);
    display: flex;
    flex-direction: column;
    //height: 90vh;
    justify-content: space-between;
    margin: auto;
    max-height: 50rem;  /* 800px */
    //max-width: 70rem; /*1110px*/
    overflow-y: auto;
    position: relative;
    width: 90%;
    z-index: 100;
 
    @media(max-width: 60rem){ /* 950px */
        height: 95vh;
        max-height: none;
    }
`;

export default Contenedor;