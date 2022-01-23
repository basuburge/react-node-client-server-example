module.exports.validateAddEmployeeDetails = (empDetails) => {
    const errorMsgs = {};
    let isValidEmpDetails = true;
    if(!empDetails.name) {
        isValidEmpDetails = false;
        errorMsgs.name = "Employee name is required."
    }
    if(!empDetails.department) {
        isValidEmpDetails = false;
        errorMsgs.department = "Employee department is required."
    }
    if(!empDetails.age) {
        isValidEmpDetails = false;
        errorMsgs.age = "Employee age is required."
    }
    if(!empDetails.salary) {
        isValidEmpDetails = false;
        errorMsgs.salary = "Employee salary is required."
    }

    return {isValidEmpDetails, errorMsgs};


}

module.exports.validateDeleteEmployeeDetails = (empId) => {
    if(empId) {
        return {isValidEmpDetails: true, errorMsgs: ""};
    } else {
        return {isValidEmpDetails: false, errorMsgs: "Employee Id is required"};
    }    
}