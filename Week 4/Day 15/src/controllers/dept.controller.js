// const express = require("express");
// const router = express.Router();


// //  get request  -    /Detps
// router.get("/Depts", function(req,res)
// {
//     res.send("This is get request, returns all depts");
// });
 
// //  get request  -    /Detps/10
// router.get("/Depts/:id", function(req,res)
// {
//     res.send("This is get request, returns dept for given id");
// });


// //  post request  -    /Detps
// router.post("/Depts", function(req,res)
// {
//     res.send("This is post request, to create new department details");
// });

// //  put request  -    /Depts/10
// router.put("/Depts/:id", function(req,res)
// {
//     res.send("This is put request, to update dept details");
// });


// //  delete request  -    /Detps/10
// router.delete("/Depts/:id", function(req,res)
// {
//     res.send("This is delete request, to delete selected dept");
// });



// module.exports = router;

//-------------------------------------------------------------------------------------------------------------------------------------------------
// //Day 14
// const express = require("express");
// const router = express.Router();
// const deptService = require('../services/dept.service');

// //  get request  -    /Detps
// router.get("/Depts", async function(req,res)
// {
//     let deptsArray  = await   deptService.getAllDepartments();
//     console.log("[GET ALL] No. of Departments : "  + deptsArray.length);
//     res.send(deptsArray);
// });
 
// //  get request  -    /Detps/10
// router.get("/Depts/:id", async function(req,res)
// {
//   //  var dno =  req.params.id;   
//     var {id} =  req.params;  
//     let deptObj =  await deptService.getDepartmentById(id);

//     console.log("[GET BY ID]", deptObj);
//     res.send(deptObj);     
// });


// //  post request  -    /Detps
// router.post("/Depts", async function(req,res)
// {
//     var deptObj  = { 
//         deptno : parseInt(req.body.deptno),	
//         dname  :  req.body.dname,
//         loc   : req.body.loc  };

//     let status = {};
//     status.message = await deptService.addDept(deptObj);

//     console.log("[CREATE]",  status);
//     res.send(status);
// });

// //  put request  -    /Depts/10
// router.put("/Depts/:id", async function(req,res)
// {
//     var deptObj  = { 
//         deptno : parseInt(req.body.deptno),	
//         dname  :  req.body.dname,
//         loc   : req.body.loc  };

//         let status = {};
//         status.message = await deptService.updateDept(deptObj);
    
//         console.log("[UPDATE]",  status);
//         res.send(status);
// });
  

// //  delete request  -    /Detps/10
// router.delete("/Depts/:id", async function(req,res)
// {
//     var {id} =  req.params;   

//     let status = {};
//     status.message = await deptService.deleteDeptById(id);
    
//    console.log(status);

//     console.log("[DELETE]  This is delete request to delete selected dept : " + id);
//     res.send(status);
// });



// module.exports = router;


//-------------------------------------------------------------------------------------------------------------------------------------------------

//Day 15

// const express = require("express");
// const router = express.Router();
// const deptService = require('../services/dept.service');

// //  get request  -    /Detps
// router.get("/Depts", async function(req,res)
// {    
//     let dataObj = {};   
//     dataObj.deptsArray = await deptService.getAllDepartments();
//     res.render("deptList", dataObj);
// });
  
// router.get("/Depts/:id", async function(req,res)
// {    
//     //var {id} =  req.params;
//     let {id} =  req.query;  

//     let dataObj = {};   
//     dataObj.deptObj = await deptService.getDepartmentById(id);
//     res.render("deptDetails", dataObj);
// });

// router.get("/CreateDept", async function(req,res)
// {   
//     let dataObj = {};      
//     res.render("deptCreate", dataObj);
// });

// router.post("/CreateDept", async function(req,res)
// {   
//     // Read data from post request  and Prepare the object with request values
//     var deptObj  = { 
//         deptno : parseInt(req.body.deptno),	
//         dname  :  req.body.dname,
//         loc   : req.body.loc  };
  
//     // Send that object server by calling service method     
//       await deptService.addDept(deptObj);

//     // Redirect to Main / Home Page 
//     res.redirect("/DeptController/Depts"); 
// });

// module.exports = router;

//-----------------------------------------------------------------------------------------------------------------------------------------------
//day 16
const express = require("express");
const router = express.Router();
const deptService = require('../services/dept.service');

// router level 
// router.use();   

//  get request  -    /Detps
router.get("/Depts", async function(req,res)
{    
    let dataObj = {};   
    dataObj.deptsArray = await deptService.getAllDepartments();
    res.render("deptList", dataObj);
});
  
//router.get("/DeptDetails/:id", async function(req,res)
router.get("/DeptDetails", async function(req,res)
{    
   //   var {id} =  req.params;  
       let {id} =  req.query;  

    if(id == null || id==undefined)
    {
        id= 10;
    }

    let dataObj = {};   
    dataObj.deptObj = await deptService.getDepartmentById(id);
    res.render("deptDetails", dataObj);
});

router.get("/CreateDept", async function(req,res)
{   
    let dataObj = {};      
    res.render("deptCreate", dataObj);
});

router.post("/CreateDept", async function(req,res)
{   
    // Read data from post request  and Prepare the object with request values
    var deptObj  = { 
        deptno : parseInt(req.body.deptno),	
        dname  :  req.body.dname,
        loc   : req.body.loc  };
  
    // Send that object server by calling service method     
      await deptService.addDept(deptObj);

    // Redirect to Main / Home Page 
    res.redirect("/DeptController/Depts"); 
});

module.exports = router;