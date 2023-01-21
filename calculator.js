var num1, num2, result;

function showCustomAlert(message) {
  var alertMessage = document.querySelector('.alert-message');
  var alertMessageText = document.querySelector('.alert-message-text');
  var alertMessageClose = document.querySelector('.alert-message-close');
  
  alertMessageText.innerHTML = message;
  alertMessage.style.display = "block";

  alertMessageClose.onclick = function() {
    alertMessage.style.display = "none";
  }
}

function performOperation(operation) {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (operation == "add") {
    result = num1 + num2;
  } else if (operation == "subtract") {
    result = num1 - num2;
  } else if (operation == "multiply") {
    result = num1 * num2;
  } else if (operation == "divide") {
    result = num1 / num2;
  }

  document.getElementById("result").innerHTML = result;
  showCustomAlert("Congratulations on using the calculator! Your answer is " + result);
  setTimeout(function(){ alertMessage.style.display = "none"; }, 10000);
}

