// const assert = require('assert');
// const deptService = require('../services/dept.service');

// describe("Department Test Cases",()=>
// {
//     it("Array output or not",async ()=>
//     {
//         let result=await deptService.getAllDepartments();
//         assert(Array.isArray(result), 'Result should be an array');

//     });

// });

// describe("getDepartmentById Test Cases", () => {
//     it("Should return department object for valid department ID", async () => {
//         let deptObj = await deptService.getDepartmentById(7); 
//         assert.strictEqual(deptObj.deptno, 7);
//     });

//     it("Should return null for invalid department ID", async () => {
//         let deptObj = await deptService.getDepartmentById(100);
//         assert.strictEqual(deptObj, null);
//     });
// });