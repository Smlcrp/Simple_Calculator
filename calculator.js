var num1, num2, result, resAsString;

function customAlertDelete() {
  var alertMessage = document.querySelector('.alert-message');

  if(alertMessage.style.display == "block") {
    alertMessage.style.display = "none"
  } 
}

function showCustomAlert(message) {
  var alertMessage = document.querySelector('.alert-message');
  var alertMessageText = document.querySelector('.alert-message-text');
  
  
  alertMessageText.innerHTML = message;
  alertMessage.style.display = "block";


}

function displayResult(resAsString) {
  if(resAsString.value) {
    showCustomAlert("Congratulations! your answer is: " + resAsString);
  }else {
    showCustomAlert("Sorry I Dont Know The Answer");
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

  resAsString = result.toString();

  displayResult(resAsString);

  //document.getElementById("result").innerHTML = result;
  //showCustomAlert("Congratulations on using the calculator! Your answer is " + resAsString);
}



