var timeBlockArea = document.querySelector(".container");

var ourCurrentTime = moment();
var now = moment();
var time = now.hour();


var whereTheTimeGoes = document.createElement('p');
whereTheTimeGoes.textContent = ourCurrentTime.format("MMMM DD, YYYY - hh:mm:ss a");
timeBlockArea.appendChild(whereTheTimeGoes);

var allHours = document.createElement('div');

var hoursList = document.createElement('div');

var firstHour = document.createElement('div');
var firstHourNumber = 9;

var secondHour = document.createElement('div');
var secondHourNumber = 10;

var thirdHour = document.createElement('div');
var thirdHourNumber = 11;

var fourthHour = document.createElement('div');
var fourthHourNumber = 12;

var fifthHour = document.createElement('div');
var fifthHourNumber = 13;

var sixthHour = document.createElement('div');
var sixthHourNumber = 14;

var seventhHour = document.createElement('div');
var seventhHourNumber = 15;

var eigthHour = document.createElement('div');
var eigthHourNumber = 16;

var firstHourText = document.createElement('textarea');
firstHourText.textContent = "Enter something to do";
firstHourText.id = "firstHourText-Id";
firstHourText.innerHTML = localStorage.getItem("firstHourSaved");

var secondHourText = document.createElement('textarea');
secondHourText.id = "secondHourText-Id";
secondHourText.innerHTML = localStorage.getItem("secondHourSaved");

var thirdHourText = document.createElement('textarea');
thirdHourText.id = "thirdHourText-Id";
thirdHourText.innerHTML = localStorage.getItem("thirdHourSaved");

var fourthHourText = document.createElement('textarea');
fourthHourText.id = "fourthHourText-Id";
fourthHourText.innerHTML = localStorage.getItem("fourthHourSaved");

var fifthHourText = document.createElement('textarea');
fifthHourText.id = "fifthHourText-Id";
fifthHourText.innerHTML = localStorage.getItem("fifthHourSaved");

var sixthHourText = document.createElement('textarea');
sixthHourText.id = "sixthHourText-Id";
sixthHourText.innerHTML = localStorage.getItem("sixthHourSaved");

var seventhHourText = document.createElement('textarea');
seventhHourText.id = "seventhHourText-Id";
seventhHourText.innerHTML = localStorage.getItem("seventhHourSaved");

var eigthHourText = document.createElement('textarea');
eigthHourText.id = "eigthHourText-Id";
eigthHourText.innerHTML = localStorage.getItem("eigthHourSaved");

var firstButton = document.createElement('button');
firstButton.setAttribute("class", "saveBtn");
firstButton.textContent = "save";
firstButton.id = "first-button-id";

var secondButton = document.createElement('button');
secondButton.setAttribute("class", "saveBtn");
secondButton.textContent = "save";
secondButton.id = "second-button-id";

var thirdButton = document.createElement('button');
thirdButton.setAttribute("class", "saveBtn");
thirdButton.textContent = "save";
thirdButton.id = "third-button-id";

var fourthButton = document.createElement('button');
fourthButton.setAttribute("class", "saveBtn");
fourthButton.textContent = "save";
fourthButton.id = "fourth-button-id";

var fifthButton = document.createElement('button');
fifthButton.setAttribute("class", "saveBtn");
fifthButton.textContent = "save";
fifthButton.id = "fifth-button-id";

var sixthButton = document.createElement('button');
sixthButton.setAttribute("class", "saveBtn");
sixthButton.textContent = "save";
sixthButton.id = "sixth-button-id";

var seventhButton = document.createElement('button');
seventhButton.setAttribute("class", "saveBtn");
seventhButton.textContent = "save";
seventhButton.id = "seventh-button-id";

var eightButton = document.createElement('button');
eightButton.setAttribute("class", "saveBtn");
eightButton.textContent = "save";
eightButton.id = "eigth-button-id";


firstHourText.className = "time-block";
secondHourText.className = "time-block";
thirdHourText.className = "time-block";
fourthHourText.className = "time-block";
fifthHourText.className = "time-block";
sixthHourText.className = "time-block";
seventhHourText.className = "time-block";
eigthHourText.className = "time-block";


hoursList.style.textAlign = "center";
hoursList.textContent = "Today";

firstHour.textContent = "9:00am - 9:59am";
firstHour.setAttribute("class", "row");

secondHour.textContent = "10:00am - 10:59am";
secondHour.setAttribute("class", "row");

thirdHour.textContent = "11:00am - 11:59am";
thirdHour.setAttribute("class", "row");

fourthHour.textContent = "12:00pm - 12:59pm";
fourthHour.setAttribute("class", "row");

fifthHour.textContent = "1:00pm - 1:59pm";
fifthHour.setAttribute("class", "row");

sixthHour.textContent = "2:00pm - 2:59pm";
sixthHour.setAttribute("class", "row");

seventhHour.textContent = "3:00pm - 3:59pm";
seventhHour.setAttribute("class", "row");

eigthHour.textContent = "4:00pm - 4:59pm";
eigthHour.setAttribute("class", "row");



timeBlockArea.appendChild(hoursList);

hoursList.appendChild(firstHour);
firstHour.appendChild(firstHourText);
firstHour.appendChild(firstButton);

hoursList.appendChild(secondHour);
secondHour.appendChild(secondHourText);
secondHour.appendChild(secondButton);

hoursList.appendChild(thirdHour);
thirdHour.appendChild(thirdHourText);
thirdHour.appendChild(thirdButton);

hoursList.appendChild(fourthHour);
fourthHour.appendChild(fourthHourText);
fourthHour.appendChild(fourthButton);

hoursList.appendChild(fifthHour);
fifthHour.appendChild(fifthHourText);
fifthHour.appendChild(fifthButton);

hoursList.appendChild(sixthHour);
sixthHour.appendChild(sixthHourText);
sixthHour.appendChild(sixthButton);

hoursList.appendChild(seventhHour);
seventhHour.appendChild(seventhHourText);
seventhHour.appendChild(seventhButton);

hoursList.appendChild(eigthHour);
eigthHour.appendChild(eigthHourText);
eigthHour.appendChild(eightButton);

//Create a button for each hour
//Add them to the local storage array 
//add the array to storage 

document.getElementById("first-button-id").addEventListener("click", function () {
    var captureInput = document.getElementById("firstHourText-Id").value;
    localStorage.setItem("firstHourSaved", captureInput);
});

document.getElementById("second-button-id").addEventListener("click", function () {
    var captureInput = document.getElementById("secondHourText-Id").value;
    localStorage.setItem("secondHourSaved", captureInput);
});

document.getElementById("third-button-id").addEventListener("click", function () {
    var captureInput = document.getElementById("thirdHourText-Id").value;
    localStorage.setItem("thirdHourSaved", captureInput);
});

document.getElementById("fourth-button-id").addEventListener("click", function () {
    var captureInput = document.getElementById("fourthHourText-Id").value;
    localStorage.setItem("fourthHourSaved", captureInput);
});

document.getElementById("fifth-button-id").addEventListener("click", function () {
    var captureInput = document.getElementById("fifthHourText-Id").value;
    localStorage.setItem("fifthHourSaved", captureInput);
});

document.getElementById("sixth-button-id").addEventListener("click", function () {
    var captureInput = document.getElementById("sixthHourText-Id").value;
    localStorage.setItem("sixthHourSaved", captureInput);
});

document.getElementById("seventh-button-id").addEventListener("click", function () {
    var captureInput = document.getElementById("seventhHourText-Id").value;
    localStorage.setItem("seventhHourSaved", captureInput);
});

document.getElementById("eigth-button-id").addEventListener("click", function () {
    var captureInput = document.getElementById("eigthHourText-Id").value;
    localStorage.setItem("eigthHourSaved", captureInput);
});


if (firstHourNumber < time) {
    firstHour.setAttribute("class", "past");
} else if (firstHourNumber === time) {
    firstHour.setAttribute("class", "present");
} else {
    firstHour.setAttribute("class", "future");
};

if (secondHourNumber < time) {
    secondHour.setAttribute("class", "past");
} else if (secondHourNumber === time) {
    secondHour.setAttribute("class", "present");
} else {
    secondHour.setAttribute("class", "future");
};

if (thirdHourNumber < time) {
    thirdHour.setAttribute("class", "past");
} else if (thirdHourNumber === time) {
    thirdHour.setAttribute("class", "present");
} else {
    thirdHour.setAttribute("class", "future");
};

if (fourthHourNumber < time) {
    fourthHour.setAttribute("class", "past");
} else if (fourthHourNumber === time) {
    fourthHour.setAttribute("class", "present");
} else {
    fourthHour.setAttribute("class", "future");
};

if (fifthHourNumber < time) {
    fifthHour.setAttribute("class", "past");
} else if (fifthHourNumber === time) {
    fifthHour.setAttribute("class", "present");
} else {
    fifthHour.setAttribute("class", "future");
};

if (sixthHourNumber < time) {
    sixthHour.setAttribute("class", "past");
} else if (sixthHourNumber === time) {
    sixthHour.setAttribute("class", "present");
} else {
    sixthHour.setAttribute("class", "future");
};

if (seventhHourNumber < time) {
    seventhHour.setAttribute("class", "past");
} else if (seventhHourNumber === time) {
    seventhHour.setAttribute("class", "present");
} else {
    seventhHour.setAttribute("class", "future");
};

if (eigthHourNumber < time) {
    eigthHour.setAttribute("class", "past");
} else if (eigthHourNumber === time) {
    eigthHour.setAttribute("class", "present");
} else {
    eigthHour.setAttribute("class", "future");
};

