var employeeList = [];

module.exports.getEmployeeList = () => {
    return employeeList;
}

module.exports.addEmployeeDetails = (employeeDetails) => {
    employeeDetails.id = employeeList.length ? employeeList[employeeList.length-1].id + 1 : 1;
    employeeList.push(employeeDetails);
    return employeeList;
}

module.exports.deleteEmployeeDetails = (employeeId) => {
    const findEmployeeIndex = employeeList.findIndex((emp) => emp.id === +employeeId);
    if(findEmployeeIndex > -1) {
        employeeList.splice(findEmployeeIndex, 1);
        return {
            status: true,
            msg: "Employee Deleted successfully"
        };        
    } else {
        return {
            status: false,
            msg: "Employee not found"
        };
    }
}

module.exports.clearAllEmployeeDetails = () => {
    employeeList = [];
    return employeeList;
}