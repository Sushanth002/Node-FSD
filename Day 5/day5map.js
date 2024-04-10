// Define a Map to store flight details
const flightDetails = new Map();

// Function to add flight details to the Map
function addFlightDetails(flightNumber, source, destination, date, time) {
    flightDetails.set(flightNumber, { source, destination, date, time });
}

// Function to get the status of a flight based on its flight number
function getFlightStatus(flightNumber) {
    if (flightDetails.has(flightNumber)) {
        const { source, destination, date, time } = flightDetails.get(flightNumber);
        const currentTime = new Date();
        const flightTime = new Date(`${date} ${time}`);
        if (flightTime < currentTime) {
            console.log(`The Flight ${flightNumber} has already left from ${source} to ${destination} at ${time} on ${date}.`);
        } else {
            console.log(`The Flight ${flightNumber} is leaving at ${time} from ${source} to ${destination} on ${date}.`);
        }
    } else {
        console.log(`Invalid flight number: ${flightNumber}.`);
    }
}

// Add sample flight details
addFlightDetails('AR456', 'Hyderabad', 'Bangalore', '2024-04-08', '18:00');

addFlightDetails('AR450', 'Vizag', 'Bangalore', '2024-04-08', '9:00');
// Get the status of a flight
const flightNumber = 'AR450'; // Change this to the desired flight number
getFlightStatus(flightNumber);
