import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';

const URL_HOST = "https://localhost:8443";
const url = URL_HOST + "/ws-admin-servicios/ws/generarExportableExcel";
const myHeaders = new Headers({"Content-Type": "application/json",});
var fileNameDef = '';

export const createColumnToExport = ({title, type}) => {
    const tipo = type ? type : 'string';
    return {
        title,
        type:  tipo,
        aling: tipo === 'string' ? 'left' : tipo === 'date' ? 'center' : 'right',
    };
  } 

export const createRowsToExport = ( array ) => {
    const rows = array.map((row, index) => {
        const values = Object.values(row).toString().replace(',[object Object]', '')
        return {rowId: index, rowData : values};
    });
    return rows;
}

export const executeRequestToExport = (dataColumns, dataRows, exportType, propsToExport ) => {

    var request = {
        exportType,
        fileName: `${propsToExport.exportFileName}.${exportType}`,
        sheetName: propsToExport.exportSheetName,
        title: propsToExport.exportTitle,
        subTitle : propsToExport.subTitle,
        filters : propsToExport.filters,
        numCols : dataColumns.length,
        numRows : dataRows.length,
        dataColumns,
        dataRows,
    };

    console.log('Request de exportación');
    console.log(request)

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(request), // data can be `string` or {object}!
        headers: myHeaders
    }).then(res => {
        //console.log(res);
        res.blob().then(buf => {
            //console.log(buf);
            //const blob = base64StringToBlob(buf.stream(), buf.text);
            saveAs(buf, request.fileName);
        });
    })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response)); 

}

executeRequestToExport.propTypes = {
    dataColumns: PropTypes.array.isRequired,
    dataRows: PropTypes.array.isRequired,
    exportType: PropTypes.oneOf(['xlsx', 'pdf']).isRequired,
    fileName: PropTypes.string.isRequired,
    sheetName : PropTypes.string,
    title : PropTypes.string,
    subTitle: PropTypes.string,
    filters: PropTypes.string,
}

executeRequestToExport.defaultProps = {
    sheetName : `${fileNameDef}`,
    title : {fileNameDef},
    subTitle: '',
    filters: '',
  }