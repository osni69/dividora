const form = document.getElementById('media');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const num3 = Number(document.getElementById('num3').value);

    const soma = num1 + num2 + num3;
    const media = soma / 3;

    resultadoDiv.textContent = ` A média dos números é: ${media.toFixed(2)}`;
});