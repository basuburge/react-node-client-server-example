import TableHeader from './table-header';
import TableBody from './table-body';
const TableList = (props) => {
    const {tableList, tableData, actionHandler} = props;
    return <table>
        <TableHeader tableList={tableList}/>
        <TableBody tableList={tableList} tableData={tableData} actionHandler={actionHandler}/>
    </table>
}

export default TableList;