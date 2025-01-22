let age = prompt("Enter your age:");
let movieType = prompt("Enter movie type (regular or 3D):");
let timeOfDay = prompt("Enter time of day (matinee or evening):");

let ticketPrice = 15;

if (age <= 10) {
    ticketPrice = 5;
} else if (age >= 65) {
    ticketPrice = 10;
}else {ticketPrice=15}

if (movieType === "3D") {
    ticketPrice = ticketPrice + 5;
}

if (timeOfDay === "evening") {
    ticketPrice = ticketPrice + 5;

    alert("თქვენი ბილეთის ფასია : " + ticketPrice + "ლარი");
}


