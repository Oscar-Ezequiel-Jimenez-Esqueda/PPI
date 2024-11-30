document.getElementById('calcularBtn').addEventListener('click', function () {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura)) {
        resultadoDiv.textContent = "Por favor, introduce valores válidos.";
        resultadoDiv.className = ''; // Limpiar clases
        return;
    }

    const imc = peso / (altura * altura);
    let mensaje = `Tu IMC es: ${imc.toFixed(2)}. `;
    let colorClass = '';

    // Determinar el color según el IMC
    if (imc < 18.5) {
        mensaje += "Bajo peso";
        colorClass = 'yellow';
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje += "Peso normal";
        colorClass = 'green';
    } else if (imc >= 25 && imc < 29.9) {
        mensaje += "Sobrepeso";
        colorClass = 'orange';
    } else {
        mensaje += "Obesidad";
        colorClass = 'red';
    }

    resultadoDiv.textContent = mensaje;
    resultadoDiv.className = colorClass;
});
