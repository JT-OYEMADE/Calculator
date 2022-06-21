let x = window.prompt("Enter First Number");
let y = window.prompt("Enter Second Number");
let operators = window.prompt("Enter your preferred Operator(+, -, *, /)");

if (operators === "+") {
  z = Number(x) + Number(y);
  alert(`The result is ${z}`);
}
if (operators === "-") {
  z = Number(x) - Number(y);
  alert(`The result is ${z}`);
}
if (operators === "*") {
  z = Number(x) * Number(y);
  alert(`The result is ${z}`);
}
if (operators === "/") {
  z = Number(x) / Number(y);
  alert(`The result is ${z}`);
}