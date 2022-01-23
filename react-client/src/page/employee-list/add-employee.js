import { useState } from "react";
import {apiCall} from '../../utils/api';
const defaultUserDetails =     {
    name: "",
    department: "",
    age: "",
    salary: "",
}
const AddEmployee = (props) => {
    const {setEmpList } = props;
    const [userDetails, setUserDetails] = useState(defaultUserDetails);
    
    const updateUserDetails = (key, value) => {
        setUserDetails({
            ...userDetails,
            [key] : value
        });

    }

    const addEmployeeDetails = () => {
        apiCall("/api/add-employee", "POST", userDetails, (data) => {
            setEmpList(data);
            //setUserDetails(defaultUserDetails);
        });
    }

    return <div>
        <p>
            <label>
                Employee Name
                <input type="text" value={userDetails.name} onChange={(e) => updateUserDetails("name", e.target.value)}/>
            </label>
        </p>
        <p>
            <label>
                Employee Department
                <input type="text" value={userDetails.department} onChange={(e) => updateUserDetails("department", e.target.value)}/>
            </label>
        </p>
        <p>
            <label>
                Employee Age
                <input type="text" value={userDetails.age} onChange={(e) => updateUserDetails("age", e.target.value)}/>
            </label>
        </p>
        <p>
            <label>
                Employee Salary
                <input type="text" value={userDetails.salary} onChange={(e) => updateUserDetails("salary", e.target.value)}/>
            </label>
        </p>
        <p>
            <button onClick={addEmployeeDetails}>Add Employee</button>
        </p>
    </div>
}

export default AddEmployee;