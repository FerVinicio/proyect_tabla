import styled from 'styled-components';
import TableRow from '@mui/material/TableRow';
// import theme from '../theme';

const ContenedorTabla = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 1.87rem; /* 30px */
 
    @media(max-width: 60rem){ /* 950px */
        flex-direction: column;
 
        & > * {
            width: 100%;
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`;

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
      backgroundColor:'#eaeaea',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export {ContenedorTabla, StyledTableRow}
