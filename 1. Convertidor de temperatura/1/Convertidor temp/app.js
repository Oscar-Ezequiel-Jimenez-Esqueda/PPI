document.getElementById('convertBtn').addEventListener('click', function () {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;

    if (isNaN(inputValue)) {
        document.getElementById('result').textContent = "Por favor, introduce un número válido.";
        return;
    }

    // Convertir la temperatura de la unidad de entrada a Celsius primero
    let tempInCelsius;
    switch (inputUnit) {
        case 'C':
            tempInCelsius = inputValue;
            break;
        case 'F':
            tempInCelsius = (inputValue - 32) * 5 / 9;
            break;
        case 'K':
            tempInCelsius = inputValue - 273.15;
            break;
        case 'R':
            tempInCelsius = (inputValue - 491.67) * 5 / 9;
            break;
    }

    // Convertir de Celsius a la unidad de salida
    switch (outputUnit) {
        case 'C':
            result = tempInCelsius;
            break;
        case 'F':
            result = (tempInCelsius * 9 / 5) + 32;
            break;
        case 'K':
            result = tempInCelsius + 273.15;
            break;
        case 'R':
            result = (tempInCelsius + 273.15) * 9 / 5;
            break;
    }

    document.getElementById('result').textContent = `Resultado: ${result.toFixed(2)} °${outputUnit}`;
});
