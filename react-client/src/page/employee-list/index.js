
import { useEffect, useState } from "react";
import TableList from "../../component/table-list";
import AddEmployee from './add-employee';
import { apiCall } from "../../utils/api";

const tableConfig = [
    {
        header : "Name",
        fieldName : "name",
        isActionHandler: false,
    },
    {
        header : "Department",
        fieldName : "department",
        isActionHandler: false,
    },
    {
        header : "Age",
        fieldName : "age",
        isActionHandler: false,
    },
    {
        header : "Salary",
        fieldName : "salary",
        isActionHandler: false,
    },
    {
        header : "Delete Emplotee",
        fieldName : "delete",
        isActionHandler: true,
    }
];
const EmployeeList = () => {
    const [empList, setEmpList] = useState([]);

    useEffect(() => {
        apiCall("/api/employee-list", "GET", {}, (data) => {
            setEmpList(data);
        });
    }, []);

    const deleteActionHandler = (emp) => {
        console.log(emp)
        apiCall(`/api/delete-employee/${emp.id}`, "DELETE", {}, (data) => {
            setEmpList(data);
        });
    }




    return <>
        <AddEmployee setEmpList={setEmpList} />
        <TableList tableList={tableConfig} tableData={empList} actionHandler={deleteActionHandler} />
    </>
}

export default EmployeeList;