// const airports = [
//     { name: "Mumbai", code: "BOM", full_name: "Chhatrapati Shivaji International Airport", country: "India" },
//     { name: "Dubai", code: "DXB", full_name: "Dubai International Airport", country: "United Arab Emirates" },
//     { name: "New York", code: "JFK", full_name: "John F. Kennedy International Airport", country: "USA" },
//     { name: "London", code: "LHR", full_name: "Heathrow Airport", country: "UK" },
//     { name: "Paris", code: "CDG", full_name: "Charles de Gaulle Airport", country: "France" },
//     // Add more airports as needed
// ];

// function initializeDefaultAirports() {
//     const defaultDeparture = airports[0]; // Mumbai
//     const defaultArrival = airports[1]; // Dubai
    
//     document.getElementById("departure-airport").value = defaultDeparture.name;
//     document.getElementById("departure-subtext").textContent = `${defaultDeparture.code}, ${defaultDeparture.full_name}`;
    
//     document.getElementById("arrival-airport").value = defaultArrival.name;
//     document.getElementById("arrival-subtext").textContent = `${defaultArrival.code}, ${defaultArrival.full_name}`;
// }

// function autocomplete(input, listElement, labelElement, subtextElement, defaultLabel, otherInput) {
//     input.addEventListener("focus", function() {
//         labelElement.textContent = defaultLabel === "From" ? "From:" : "To:";
//         input.value = "";
//         filterAirports(input, listElement, otherInput);
//     });

//     input.addEventListener("input", function() {
//         filterAirports(input, listElement, otherInput);
//     });

//     input.addEventListener("blur", function() {
//         if (!input.value) {
//             labelElement.textContent = defaultLabel;
//             const defaultAirport = airports.find(airport => airport.name === defaultLabel);
//             input.value = defaultAirport.name;
//             subtextElement.textContent = `${defaultAirport.code}, ${defaultAirport.full_name}`;
//         }
//     });

//     function filterAirports(input, listElement, otherInput) {
//         const value = input.value.toLowerCase();
//         const otherValue = otherInput.value.toLowerCase();
//         listElement.innerHTML = "";

//         if (!value) return;

//         const filteredAirports = airports.filter(airport =>
//             (airport.name.toLowerCase().includes(value) || 
//             airport.country.toLowerCase().includes(value) ||
//             airport.code.toLowerCase().includes(value)) &&
//             airport.name.toLowerCase() !== otherValue // Prevent selecting the same airport
//         );

//         filteredAirports.forEach(airport => {
//             const item = document.createElement("div");
//             item.classList.add("autocomplete-item");
//             item.textContent = `${airport.name}, ${airport.country} (${airport.code})`;
//             item.addEventListener("click", function() {
//                 input.value = airport.name;
//                 subtextElement.textContent = `${airport.code}, ${airport.full_name}`;
//                 listElement.innerHTML = "";
//             });
//             listElement.appendChild(item);
//         });
//     }
// }

// // Initialize autocomplete for departure and arrival airports
// autocomplete(
//     document.getElementById("departure-airport"),
//     document.getElementById("departure-autocomplete"),
//     document.getElementById("departure-label"),
//     document.getElementById("departure-subtext"),
//     "From",
//     document.getElementById("arrival-airport")
// );

// autocomplete(
//     document.getElementById("arrival-airport"),
//     document.getElementById("arrival-autocomplete"),
//     document.getElementById("arrival-label"),
//     document.getElementById("arrival-subtext"),
//     "To",
//     document.getElementById("departure-airport")
// );

// // Set today's date as the minimum date for departure and return
// const today = new Date().toISOString().split('T')[0];
// document.getElementById("departure-date").setAttribute("min", today);
// document.getElementById("return-date").setAttribute("min", today);

// // Update the day when a departure date is selected
// document.getElementById("departure-date").addEventListener("change", function() {
//     const selectedDate = this.value;
//     const dayOfWeek = getDayOfWeek(selectedDate);
//     document.getElementById("departure-day").textContent = dayOfWeek;
// });

// // Update the day when a return date is selected
// document.getElementById("return-date").addEventListener("change", function() {
//     const selectedDate = this.value;
//     const dayOfWeek = getDayOfWeek(selectedDate);
//     document.getElementById("return-day").textContent = dayOfWeek;
// });

// // Handle traveler and class selection
// document.getElementById("apply-selection").addEventListener("click", function() {
//     let travelers = document.getElementById('travellers').value;
//     const travelClass = document.getElementById('class').value.replace(/-/g, ' ');
//     if (travelers > 20) {
//         alert("You cannot select more than 20 travelers.");
//         travelers = 20;
//         document.getElementById('travellers').value = 20;
//     }
//     const displayText = `${travelers} Traveller${travelers > 1 ? 's' : ''}, ${travelClass.charAt(0).toUpperCase() + travelClass.slice(1)}`;
//     document.getElementById('travelers-display').textContent = displayText;
// });

// // Function to get the day of the week
// function getDayOfWeek(dateString) {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const date = new Date(dateString);
//     return days[date.getDay()];
// }

// Initialize default airports on page load
//window.onload = initializeDefaultAirports;

const airports = [
    { code: 'DEL', name: 'Delhi Airport India', city: 'Delhi' },
    { code: 'BLR', name: 'Bengaluru International Airport India', city: 'Bengaluru' },
    { code: 'BOM', name: 'Chhatrapati Shivaji International Airport India', city: 'Mumbai' },
    { code: 'DXB', name: 'Dubai International Airport United Arab Emirates', city: 'Dubai' },
    { code: 'JFK', name: 'John F. Kennedy International Airport United States', city: 'New York' },
    { code: 'LHR', name: 'Heathrow Airport United Kingdom', city: 'London' },
    { code: 'HND', name: 'Tokyo Haneda Airport Japan', city: 'Tokyo' },
    { code: 'SIN', name: 'Singapore Changi Airport Singapore', city: 'Singapore' },
    { code: 'SYD', name: 'Sydney Kingsford Smith Airport Australia', city: 'Sydney' },
    { code: 'CDG', name: 'Charles de Gaulle Airport France', city: 'Paris' },
    // Add more airports as needed
];

// Populate airport suggestions based on input
document.getElementById('from').addEventListener('input', function () {
    populateSuggestions('from', this.value);
});

document.getElementById('to').addEventListener('input', function () {
    populateSuggestions('to', this.value);
});

function populateSuggestions(field, value) {
    const suggestions = airports.filter(airport =>
        airport.name.toLowerCase().includes(value.toLowerCase()) ||
        airport.city.toLowerCase().includes(value.toLowerCase()) ||
        airport.code.toLowerCase().includes(value.toLowerCase())
    );
    const suggestionsContainer = document.getElementById(`${field}-suggestions`);
    suggestionsContainer.innerHTML = '';
    suggestionsContainer.style.display = suggestions.length ? 'block' : 'none';
    suggestions.forEach(airport => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.textContent = `${airport.city} (${airport.code}), ${airport.name}`;
        suggestionDiv.addEventListener('click', function () {
            document.getElementById(field).value = airport.city;
            document.getElementById(`${field}-suggestions`).style.display = 'none';
            document.getElementById(`${field}-info`).innerHTML = `<div class="airport-details">${airport.code} - ${airport.name}</div>`;
            validateAirports();
        });
        suggestionsContainer.appendChild(suggestionDiv);
    });
}

// Default airport values
const defaultFrom = airports[0];
const defaultTo = airports[1];

document.getElementById('from').value = defaultFrom.city;
document.getElementById('to').value = defaultTo.city;
document.getElementById('from-info').innerHTML = `<div class="airport-details">${defaultFrom.code} - ${defaultFrom.name}</div>`;
document.getElementById('to-info').innerHTML = `<div class="airport-details">${defaultTo.code} - ${defaultTo.name}</div>`;

// Ensure "From" and "To" airports are not the same
function validateAirports() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    if (from === to) {
        alert('From and To airports cannot be the same.');
        document.getElementById('to').value = '';
        document.getElementById('to-info').innerHTML = '';
    }
}

// Validate the number of travelers
document.getElementById('travellers').addEventListener('change', function () {
    const numTravellers = parseInt(this.value, 10);
    if (numTravellers > 20) {
        alert('Please enter less than 20 travelers.');
        this.value = '1';
    }
});

// Set the day of the week for the selected departure date
document.getElementById('departure').addEventListener('change', function () {
    const selectedDate = new Date(this.value);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById('departure-day').textContent = days[selectedDate.getDay()];
});