// const db = require('../database/db');

// exports.getAllEmployees = async () => {
//     let [deptArray] = await db.query("select * from emps"); 
//     return deptArray;
// };


// exports.getEmployeeById= async (eid) => {
//     let [deptArray] = await db.query("select * from emps where empno=" + eid); 
//     return deptArray[0];
// };

// exports.deleteEmpById= async (eid) => {
//     // logic
//     let [deptArray] = await db.query("delete from emps where empno="+eid);
//     return deptArray[0];
// };

// exports.addEmployee= async (empObj) => {
//     // logic
//     let [deptArray] = await db.query("INSERT INTO dept SET ?", [empObj]);
//     return deptArray[0];
// };


//-------------------------------------------------------------------------------------------------------------------------------------------

//using sequelize orm

const { Op } = require("sequelize");
const empModel = require('..//models/emp.model');


// Read All
exports.getAllEmployees = async () =>  {
    let empArray = await empModel.findAll();
    return empArray;
};

 

//Read Single
exports.getEmpById = async (eid) => {
    let empObj = await empModel.findByPk(eid);
    return empObj;
};

 
// Create
exports.addEmployee = async (empObj) => {
    await empModel.create(empObj);
    return "Employee details are inserted";
};

 
// Update
exports.updateEmp = async (empObj) => {
    await empModel.update(empObj, { where: { empno: empObj.empno }  });
    return "Employee details are udpated";
};

// Delete 
exports.deleteEmpByEmpNo = async (eno) => {
    await empModel.destroy({ where: { empno: eno }  });
    return "Employee details are deleted";
};