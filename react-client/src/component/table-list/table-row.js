const TableRow = (props) => {
    const {tableList, tableRow, actionHandler} = props;
    return (   
    <tr>
        {Object.keys(tableRow).map((item, key) => {
            const headerInfo = tableList[key];
            if(headerInfo.isActionHandler) {
                return <td key={key}><button onClick={() => actionHandler(tableRow)} >Action</button></td>
            } else {
                return <td key={key}>{tableRow[headerInfo.fieldName]}</td>
            }
        })}
    </tr>);
}

export default TableRow;