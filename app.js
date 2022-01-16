const celciusInput = document.querySelector("#celcius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const tempInput = document.querySelectorAll("input");

tempInput.forEach(function (input) {
  input.addEventListener("input", function (e) {
    // console.log(e.target.value);
    let tempValue = parseInt(e.target.value); //型を数字に変換
    // console.log(typeof tempValue);
    let inputName = e.target.name;

    if (e.target.value === "") {
      celciusInput.value = null;
      fahrenheitInput.value = null;
      kelvinInput.value = null;

      return;
    }

    if (inputName === "celcius") {
      // celcius to fahrenheit
      let fahreheitValue = tempValue * 1.8 + 32;
      fahrenheitInput.value = fahreheitValue.toFixed(2);

      // celcius to kelvin
      let kelvinValue = tempValue + 273.15;
      kelvinInput.value = kelvinValue.toFixed(2);
    } else if (inputName === "fahrenheit") {
      // fahrenheit to celcius
      let celciusValue = (tempValue - 32) / 1.8;
      celciusInput.value = celciusValue.toFixed(2);

      // fahrenheit to kelvin
      let kelvinValue = (tempValue - 32) / 1.8 + 273.15;
      kelvinInput.value = kelvinValue.toFixed(2);
    } else if (inputName === "kelvin") {
      // celcius to kelvin
      let celciusValue = tempValue - 273.15;
      celciusInput.value = celciusValue.toFixed(2);

      // kelvin to fahrenheit
      let fahreheitValue = (tempValue - 273.15) * 1.8 + 32;
      fahrenheitInput.value = fahreheitValue.toFixed(2);
    }
  });
});
