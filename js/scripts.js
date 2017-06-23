//Business logic//

var pingPong = function(input) {
  var total = [];
  for (var number = 1; number <= input; number ++) {

    if (number % 15 === 0) {
      total.push("pingpong");
      console.log(total);
    }


    else if (number % 5 === 0) {
      total.push("pong");
      console.log(total);
    }


    else if (number % 3 === 0) {
      total.push("ping");
      console.log(total);
    }


    else {
      total.push(number);
      console.log(total);

    }
  }
  
  console.log(total);
  return total;

}

//Front end logic//

$(document).ready(function() {
  $("form.form-inline").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#pong").val());
    var newTotals = pingPong(userInput);
    newTotals.forEach(function(newTotal) {
      $(".list").append("<li>" + newTotal + "</li>");

    });
  });
});
