//TODO: 1 - Generate 4 digit PIN - done
//TODO: 2 - Make the keyboard functional - done
//TODO: 3 - Make submit btn and notification work
//TODO: 4 - Make try out functional
//TODO: 5 - "<" onClick - remove single digit and "C" clear Whole input
//TODO: 6 - if try - 0 then all the button will be disable (generate)

//Selectors
const generatePinBtn = document.querySelector(".generate-btn");
const generatedPinInput = document.querySelector(".generated-pin");
const keypadValue = document.querySelector(".show-value");
const wrongPin = document.querySelector(".wrong-pin");
const correctPin = document.querySelector(".correct-pin");
const submitBtn = document.querySelector(".submit-btn");
const tryLeft = document.getElementById("tryLeft");
const pinMatched = document.querySelector(".pin-matched-btn");

// Hide Notification
hideNotification();

// Generate 4 digit PIN
function generatePin() {
  const pin = Math.floor(Math.random() * 9000) + 1000;
  generatedPinInput.value = pin;
}

generatePinBtn.addEventListener("click", generatePin);

// Generate value from Keypad

function keypad(number) {
  if (generatedPinInput.value === "") {
    alert("Please Generate Pin First! 😡");
  } else {
    keypadValue.value += number;
  }

  if (number === "C") {
    keypadValue.value = "";
  }
}

// Remove a single digit from the keypad

function removeSingleDigit() {
  let currentValue = keypadValue.value;
  // if (generatedPinInput.value === "") {
  //   alert("Please Generate Pin First! 😡");
  // }
  // if (currentValue === "") {
  //   alert("Nothing to remove");
  // }

  keypadValue.value = currentValue.slice(0, -1); // ata aktu buzbo 0 , -1 ????
}

function hideNotification() {
  correctPin.style.display = "none";
  wrongPin.style.display = "none";
  pinMatched.style.display = "none";
}

function checkPin() {
  hideNotification();
  if (generatedPinInput.value === keypadValue.value) {
    console.log("matched");
    correctPin.style.display = "block";
    submitBtn.style.backgroundColor = "green";
    submitBtn.disabled = true;
    generatePinBtn.disabled = true;
    generatePinBtn.style.backgroundColor = "green";
    // generatePinBtn.style.display = "none";
    // pinMatched.style.display = "block";
  } else {
    console.log("wrong");
    wrongPin.style.display = "block";
    submitBtn.style.backgroundColor = "red";
    handleTryLeft();
  }
}

function handleTryLeft() {
  let value = parseInt(tryLeft.innerText);
  console.log(value);
  if (0 < value) tryLeft.innerText = value - 1;
  else {
    alert("You have 0 try left! Please try again after sometime!");
    submitBtn.disabled = true;
    generatePinBtn.style.backgroundColor = "red";
    // submitBtn.innerText = "try again later ";
  }
}
submitBtn.addEventListener("click", checkPin);

// Navigation Icon
const navicon = document.querySelector(".nav-icon");
navicon.addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  sidebar.style.left = "0";
  overlay.style.left = "0";
});
