import TableRow from "./table-row";
const TableBody = (props) => {
    const {tableList, tableData, actionHandler} = props;
    return <tbody>
        {tableData.map((item, key) => {
        return <TableRow key={key} tableList={tableList} actionHandler={actionHandler} tableRow={item} />;
    })}</tbody>;
}

export default TableBody;