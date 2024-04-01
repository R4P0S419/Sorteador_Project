document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-ra').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-max').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.round(numeroAleatorio + 0.5);

        document.getElementById('valor-resultado').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})