let actualTemp = prompt("What is the temperature?");
let desiredTemp = 70;

if (actualTemp > desiredTemp) {
  console.log("Run AC");
} else if (actualTemp < desiredTemp) {
  console.log("Run Heat");
} else {
  console.log("Standby")
}
