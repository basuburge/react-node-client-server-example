const TableHeader = (props) => {
    const {tableList} = props;

    return <thead><tr>
        {tableList.map((item, key) => {
            return <th key={key}>{item.header}</th>
        })}
    </tr></thead>;
}

export default TableHeader;