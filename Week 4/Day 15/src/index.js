/*const axios=require('axios');
let url = "https://www.w3schools.com/angular/customers.php";	
axios.get(url).then(  (resData) =>  
{
        //console.log(resData.data)	;
        
        let customerArray=resData.data.records;

        for(let item of customerArray){
            console.log(item.Name+" "+item.City);
        }
});	*/


/*const axiosDemo = require('./async_await');

console.log("Working with Promises");
console.log("------------------------------");

async function showData() {
    let response = await axiosDemo.getServerData(); 
    let serverData = response.data; 
    for (let user of serverData) {
        console.log(`ID: ${user.id}, Name: ${user.first_name} ${user.last_name}, Email: ${user.email}`);
    }
}

showData();*/

//Day 9------------------------------------------------------------------------------------------------------------------


// connecting to the database with environment variables
/*require('dotenv').config()


// Accessing Environment Variables
console.log(process.env.PORT);
console.log(process.env.USER_ID);
console.log(process.env.PASSWORD);
console.log(process.env.HOST);*/



// // connecting to the database without environment variables
// const mysql = require('mysql2/promise');

// // connection to mysql 
// const mysqlPool = mysql.createPool({
//     host: 'localhost',
//     port : 3306,
//     user: 'root',
//     password: 'Sushanth@20',
//     database: 'apr2024db'
// });

// //module.exports = mysqlPool;

// mysqlPool.query("select * from dept").then((results) => 
// {
//     let deptsArray = results[0];
//     for(let item of deptsArray)
//     {
//         console.log(item.deptno, item.dname);
//     }
// });



//Day 10 ---------------------------------------------------------------example with more services functions 

// const deptService = require('./src/services/dept.service');


// async function main()
// {
//    let results  = await   deptService.getAllDepartments();
   
//    for(let item of results)
//    {
//     console.log(item.dname, item.loc);
//    }
   
//    console.log("-----------------------------------------------------------------------");

//    let deptObj =  await deptService.getDepartmentById(7);
//    console.log(deptObj.dname, deptObj.loc);

//    console.log("----------------------------------------------------------------------");
  
//    console.log("------------Deleting by Id---------------");

//    await deptService.deleteDeptById(10);

//    console.log("------------Deleted Successfully---------------");

//    console.log("------------Remaining Departments and Locations---------------");

//    results = await   deptService.getAllDepartments();
   
//    for(let item of results)
//    {
//     console.log(item.dname, item.loc);
//    }

// console.log("---------------------------");
//    deptObj = { deptno : 80, dname : "Test-80", loc : "Loc-80" };
//    let status = "";
//    status = await deptService.addDept(deptObj);
//    console.log(status);
   
//    console.log("-------------------------------------------------------------------------");

//    let newDept = {
//     deptno:50,
//     dname: 'Node FSD',
//     loc: 'HYD'
//    };

//    let addObj = await deptService.addDept(newDept);
//    console.log("New department added successfully:");
// //update 
//          deptObj = { deptno : 62, dname : "Finance", loc : "Mumbai" }; 

//          let status = await deptService.updateDept(deptObj);
//          console.log(status);

// get dept by location

    // const location = "Delhi";
    // const deptNames = await deptService.getDeptNamesByLocation(location);
    
    // if (deptNames.length === 0) {
    //     console.log(`No departments found in ${location}`);
    // } else {
    //     console.log(`Departments located in ${location}:`);
    //     deptNames.forEach(deptName => {
    //         console.log(deptName);
    //     });
    // }



//      process.exit();

//  }
//  main();

//-------------------------------------------------------------------------------------------------------------------------------------------------

//Day 13

// const express = require("express");
// const deptRouter = require('./src/controllers/dept.controller');
// const empRouter = require('./src/controllers/emp.controller');

// // create express application object 
// const app = express();


// // we have to use the each controller
// // app.use("/", deptRouter);
// // app.use("/route_prefix", deptRouter);
// app.use("/deptapi", deptRouter);
// app.use("/empapi",empRouter); 

// // default request
// app.get("/", function(req,res)  
// {
//     let resultStr  = "<h1 align='center'>Welcome to Express Web Application<h1/>";
   
     
//     res.send(resultStr);
// });



// app.listen(3000, function() { });
// console.log("Server Application is started. Url : http://localhost:3000");


// ----------------------------------------------------------------------------------------------------------------------------------------------\


// Day 14

// const express = require("express");
// var bodyParser = require("body-parser");
// const deptRouter = require('./src/controllers/dept.controller');

// // create express application object 
// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // app.use("/", deptRouter);
// // app.use("/route_prefix", deptRouter);
// app.use("/deptapi", deptRouter);


// // default request
// app.get("/", function(req,res)  
// {
//     let resultStr  = "<h1 align='center'>Welcome to Express Web Application<h1/>";
//     res.send(resultStr);
// });

// app.listen(3002, function() { });
// console.log("Server Application is started. Url : http://localhost:3002");



// module.exports = app; // for testing

//-------------------------------------------------------------------------------------------------------------------------------------------------

//Day 15

const express = require("express");
var bodyParser = require("body-parser");
const deptRouter = require('./controllers/dept.controller');
const empRouter = require('./controllers/emp.controller');
const dateTimeUtil = require('./utils/dateTimeUtil');
const urlUtil = require('./utils/urlUtil');
// create express application object 
const app = express();
app.use((req, res, next) => 
{
    let d = new Date();
    console.log("Request arrived to server at : " +  dateTimeUtil.getTimeStamp(d)); 
    console.log("Requested URL: " + urlUtil.getCurrentUrl(req));
    next();
});

app.use(express.static('public'));

//app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
//  app.use(bodyParser.json());

app.set("view engine", "ejs");

// app.use("/", deptRouter);
// app.use("/route_prefix", deptRouter);
app.use("/DeptController", deptRouter);
app.use("/EmpController", empRouter);

// default request
app.get("/", function(req,res)  
{
    let resultStr  = "<h1 align='center'>Welcome to Express Web Application<h1/>";
    res.send(resultStr);
});

app.get("*", function(req,res)  
{
    //render NotFound view 
     res.status(404).render("NotFound", null);
});

app.listen(3002, function() { });
console.log("Server Application is started. Url : http://localhost:3002");



module.exports = app; // for testing
