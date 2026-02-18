//your JS code here. If required.

const calculateBtn = document.getElementById("calculate")

calculateBtn.addEventListener("click", function () {
  const num1 = Number(document.getElementById("num1").value)
  const num2 = Number(document.getElementById("num2").value)
  const operator = document.getElementById("operator").value
  let result = ""

  if (!isNaN(num1) && !isNaN(num2)) {

    if (operator === "+") result = num1 + num2
    else if (operator === "-") result = num1 - num2
    else if (operator === "*") result = num1 * num2
    else if (operator === "/") {
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"
    }

    document.getElementById("result").textContent = result
  }
})



const changeBtn = document.getElementById("change_text")

changeBtn.addEventListener("click", function () {
  const newTexts = ["Bye", "Good Bye", "To", "Your", "Class"]
  const divisions = document.getElementsByClassName("division")

  for (let i = 0; i < divisions.length; i++) {
    divisions[i].textContent = newTexts[i]
  }
})
