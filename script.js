const inputField = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultElement = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const inputValue = inputField.value.trim();
  if (inputValue === "") {
    alert("Please input a value");
    return;
  }

  const cleanedInputValue = inputValue
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  const reversedValue = cleanedInputValue.split("").reverse().join("");

  if (cleanedInputValue === reversedValue) {
    resultElement.textContent = `${inputValue} is a palindrome`;
  } else {
    resultElement.textContent = `${inputValue} is not a palindrome`;
  }
});
