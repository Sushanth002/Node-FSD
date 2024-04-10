const { Queue } = require('@datastructures-js/queue');

let queueobj = new Queue();

let request = {};

// Adding in the Queue
request = { name: "Sushanth", id: 1, number: "1234567890", description: "Add request", date: "08-04-2024", time: "10:00" };
queueobj.enqueue(request);
request = { name: "Dhoni", id: 2, number: "1265667747", description: "Remove Request", date: "09-04-2024", time: "18:00" };
queueobj.enqueue(request);
request = { name: "Mahesh", id: 3, number: "1243554321", description: "Request", date: "10-04-2024", time: "22:00" };
queueobj.enqueue(request);

console.log("------------------------Intial Queue-------------------------")
console.log(queueobj);
// Removing
let remove = queueobj.dequeue();
console.log("Delete Request:")
console.log("------------------------------------------")
console.log(`Name : ${remove.name}, Number: ${remove.number}, Description : ${remove.description}, Date: ${remove.date}, Time: ${remove.time}`);

// Display
console.log("Updated Queue:");
console.log("------------------------------------------") 
for (let item of queueobj.toArray()) {
    console.log(`Name : ${item.name}, Number: ${item.number}, Description : ${item.description}, Date: ${item.date}, Time: ${item.time}`);
}