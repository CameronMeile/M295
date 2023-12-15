// Normal Function
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
addTwoNumbers(1, 2);

const addTwoNumbers2 = function (num1, num2) {
    return num1 + num2;
}
addTwoNumbers2(1, 2);

// Error Function
const addTwoNumbers3 = (num1, num2) => {
    return num1 + num2;
}
addTwoNumbers3(1, 2);

// Shortest Form
const addTwoNumbers4 = (num1, num2) => num1 + num2;
addTwoNumbers4(1, 2);