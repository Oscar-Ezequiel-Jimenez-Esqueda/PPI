function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("resultadoIMC");
  
    if (peso && altura) {
      let imc = peso / (altura * altura);
      resultado.innerHTML = "Tu IMC es: " + imc.toFixed(2);
    } else {
      resultado.innerHTML = "Por favor ingresa ambos valores.";
    }
  }
  
  function convertirTemperatura() {
    let celsius = document.getElementById("celsius").value;
    let resultadoTemp = document.getElementById("resultadoTemp");
  
    if (celsius !== "") {
      let fahrenheit = (celsius * 9/5) + 32;
      resultadoTemp.innerHTML = `${celsius}°C es igual a ${fahrenheit.toFixed(2)}°F`;
    } else {
      resultadoTemp.innerHTML = "Por favor ingresa un valor de temperatura.";
    }
  }
  