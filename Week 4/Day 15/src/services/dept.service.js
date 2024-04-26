// const db = require('../database/db');

// exports.getAllDepartments = async () => {
//     let [deptArray] = await db.query("select * from dept"); 
//     return deptArray;
// };


// exports.getDepartmentById= async (dno) => {
//     let [deptArray] = await db.query("select * from dept where deptno=" + dno); 
//     return deptArray[0];
// };

// exports.deleteDeptById= async (dno) => {
//     // logic
//     let [deptArray] = await db.query("delete from dept where deptno="+dno);
//     return deptArray[0];
// };

// exports.addDept= async (deptObj) => {
//     // logic
//     let [deptArray] = await db.query("INSERT INTO dept SET ?", [deptObj]);
//     return deptArray[0];
// };

//-------------------------------------------------------------------------------------------------------------------

// with sequelize orm

const { Op } = require("sequelize");
const deptModel = require('..//models/dept.model');


// Read All
exports.getAllDepartments = async () => {
    let deptArray = await deptModel.findAll();
    return deptArray;
};

 

// Read Single
exports.getDepartmentById = async (dno) => {
    let deptObj = await deptModel.findByPk(dno);
    return deptObj;
};

 
// Create
exports.addDept = async (deptObj) => {
    await deptModel.create(deptObj);
    return "Dept details are inserted";
};

 
// Update
exports.updateDept = async (deptObj) => {
    await deptModel.update(deptObj, { where: { deptno: deptObj.deptno }  });
    return "Dept details are udpated";
};

// Delete 
exports.deleteDeptById = async (dno) => {
    await deptModel.destroy({ where: { deptno: dno }  });
    return "Dept details are deleted";
};

//sorting

exports.getDeptNamesByLocation = async (location) => {
    const departments = await deptModel.findAll({ where: { loc: location } });
    const deptNames = departments.map(dept => dept.dname);
    return deptNames;
};
