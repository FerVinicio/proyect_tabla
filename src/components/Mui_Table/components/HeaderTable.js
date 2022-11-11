import { FaFileExcel, FaFilePdf } from 'react-icons/fa'
import {Header, Titulo, ContenedorHeader, ContenedorBotones, BotonAccion, BtnRegresar, ActionButton} from '../elements'

const saludar = (name) => {
    alert("Hola " + name);
}

const HeaderTable = () => {
    return ( 
        <Header>
            <ContenedorHeader>
                <Titulo>Titulo Tabla</Titulo>
                <ContenedorBotones>
                    <ActionButton href='#!' onClick={(e)=>saludar('Fernando')}>{<FaFileExcel color='green' />}</ActionButton>
                    <ActionButton>{<FaFilePdf color='red' />}</ActionButton>
                    <BotonAccion>Excel</BotonAccion>
                    <BotonAccion>PDF</BotonAccion>
                    <BtnRegresar icon = {<FaFileExcel color='green' />} />
                </ContenedorBotones>
            </ContenedorHeader>
        </Header>
     );
}
 
export default HeaderTable;