// const express = require("express");
// const router = express.Router();


// router.get("/emps", function(req,res)
// {
//     res.send("This is get request, returns all emps");
// });
 
// //  get request  -    /Detps/10
// router.get("/emps/:id", function(req,res)
// {
//     res.send("This is get request, returns emps for given employee number");
// });


// //  post request  -    /Detps
// router.post("/emps", function(req,res)
// {
//     res.send("This is post request, to create new employee details");
// });

// //  put request  -    /Depts/10
// router.put("/emps/:id", function(req,res)
// {
//     res.send("This is put request, to update employee details");
// });


// //  delete request  -    /Detps/10
// router.delete("/emps/:id", function(req,res)
// {
//     res.send("This is delete request, to delete selected employee");
// });



// module.exports = router;

//----------------------------------------------------------------------------------------------------------------------------------------

//Day 15

const express = require("express");
const router = express.Router();
const empService = require('../services/emp.service');

// get all employees
router.get("/Emps", async function(req,res)
{    
    let dataObj = {};   
    dataObj.empsArray = await empService.getAllEmployees();
    res.render("empList", dataObj);
});
 
//  get request  -    /Emps/123
router.get("/emps/:id", async function(req,res)
{
    var {id} =  req.params;  

    let dataObj = {};   
    dataObj.empObj = await empService.getEmpById(id);
    res.render("empDetails", dataObj);
});


//  post request  -    /Emps
router.get("/CreateEmp", async function(req,res)
{
    let dataObj = {};      
    res.render("empCreate", dataObj);
});

router.post("/CreateEmp", async function(req,res)
{   
    // Read data from post request  and Prepare the object with request values
    var empObj  = { 
        empno : parseInt(req.body.empno),	
        ename  :  req.body.ename,
        job   : req.body.job, 
        salary   : parseInt(req.body.salary),
        deptno : parseInt(req.body.deptno)
     };
  
    // Send that object server by calling service method     
      await empService.addEmployee(empObj);

    // Redirect to Main / Home Page 
    res.redirect("/EmpController/Emps"); 
});

//  put request  -    /Depts/10
router.put("/emps/:id", function(req,res)
{
    res.send("This is put request, to update employee details");
});


//  delete request  -    /Detps/10
// router.delete("/emps/:id", function(req,res)
// {
//     res.send("This is delete request, to delete selected employee");
// });

router.delete('/DeleteEmp/:empno', async (req, res) => {
    const empno = parseInt(req.params.empno); 
    await empService.deleteEmpByEmpNo(empno);
});



module.exports = router;

