var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var {getEmployeeList, addEmployeeDetails, deleteEmployeeDetails, clearAllEmployeeDetails} = require('../common/employees');
var {validateAddEmployeeDetails, validateDeleteEmployeeDetails} = require('../common/employee-validator');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/employee-list', function(req, res, next) {
  res.json(getEmployeeList());
});

router.use(bodyParser.urlencoded({ extended: true }));
router.post('/api/add-employee', function(req, res, next) {
  const validateResult = validateAddEmployeeDetails(req.body);
  if(validateResult.isValidEmpDetails) {
    addEmployeeDetails(req.body);
    res.json(getEmployeeList());
  } else {
    res.status(400).send(new Error(JSON.stringify(validateResult.errorMsgs)));
  }
});

router.param('empid', function(req, res, next, empid) {
  next();
});
router.delete('/api/delete-employee/:empid', function(req, res, next) {
  const validateResult = validateDeleteEmployeeDetails(req.params.empid);
  if(validateResult.isValidEmpDetails) {
    const deleteAction = deleteEmployeeDetails(req.params.empid);
    if(deleteAction.status) {
      res.json(getEmployeeList());
    } else {
      res.status(404).send({errorMsg : deleteAction.msg});
    }
  } else {
    res.status(400).send(validateResult.errorMsgs);
  }
});

router.delete('/api/clear-employee-list', function(req, res, next) {
  clearAllEmployeeDetails();
  res.json(getEmployeeList());
});

module.exports = router;
