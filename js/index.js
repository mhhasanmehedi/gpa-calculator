const input = document.querySelector("input");
const button = document.querySelector("button");
let result = document.querySelector("#result");
console.log(result.textContent);

button.addEventListener("click", function (e) {
  e.preventDefault();
  const inputParse = parseInt(input.value);
  if (inputParse >= 80) {
    if (inputParse <= 100) {
      result.textContent = "অভিনন্দন আপনি A+ পেয়েছেন";
    } else {
      result.textContent = "দয়া করে সঠিক নাম্বার দিন";
      setInterval(function () {
        result.textContent = "";
      }, 3000);
    }
  } else if (inputParse >= 70) {
    result.textContent = "অভিনন্দন আপনি A পেয়েছেন!!";
  } else if (inputParse >= 60) {
    result.textContent = "অভিনন্দন আপনি A- পেয়েছেন!!";
  } else if (inputParse >= 50) {
    result.textContent = "অভিনন্দন আপনি B পেয়েছেন!!";
  } else if (inputParse >= 40) {
    result.textContent = "অভিনন্দন আপনি C পেয়েছেন!!";
  } else if (inputParse >= 33) {
    result.textContent = "অভিনন্দন আপনি D পেয়েছেন!!";
  } else if (inputParse < 33) {
    result.textContent =
      "দুঃখিত আপনি অকৃতকার্য হয়েছেন পরের বার আবার চেষ্টা করেন!!";
  } else if (input.value === " ") {
    result.textContent = "দয়া করে আপনার নাম্বার দিন";
    setInterval(function () {
      result.textContent = "";
    }, 3000);
  } else {
    alert("a;dsklfjasdlf");
  }
  input.value = "";
});
