var pingPong = function(input) {
var total = [];
for (var number = 1; number <= index; number ++) {

if (number % 15 === 0) {
  total.push("pingpong");
}


else if (number % 5 === 0) {
  total.push("pong");
}


else if (number % 3 === 0) {
  total.push("ping");
}


else {
  total.push(index);
}

}

return total;

}
