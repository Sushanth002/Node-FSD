const { Stack } = require('@datastructures-js/stack');

let browserHistory = new Stack();

function addHistory(url, date, time) {
    let entry = { url, date, time };
    browserHistory.push(entry);
}

function removeHistory() {
    let remove = browserHistory.pop();
    console.log("Deleted History:");
    console.log(`Url: ${remove.url}, Date: ${remove.date}, Time: ${remove.time}`);
    console.log("--------------------------------------");
}

function displayHistory() {
    console.log("-----------------History Details------------------------------")
    for (let entry of browserHistory.toArray()) {
        console.log(`Url: ${entry.url}, Date: ${entry.date}, Time: ${entry.time}`);
    }
}

addHistory("www.hexaware.com", "10-04-2024", "23:00");
addHistory("www.google.com", "11-04-2024", "22:00");
addHistory("www.apple.com", "12-04-2024", "21:00");

console.log("--------------------------------History Details-------------------------------------")
console.log(browserHistory);

removeHistory();
displayHistory();