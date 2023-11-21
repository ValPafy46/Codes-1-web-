document.getElementById('input1').addEventListener('keyup', function(event) {
    // Verifica se a tecla pressionada é "Enter" (código 13)
    if (event.keyCode === 13) {
        event.preventDefault(); // Previne o comportamento padrão do "Enter" em formulários
        checkPassword(); // Chama a função para verificar a senha
    }
});

function checkPassword() {
    var enteredCode = document.getElementById('input1').value;
    var correctCode = '4257'; // Insira seu código correto aqui
    var successMessage = document.getElementById('successMessage');
    var audio = document.getElementById('audio');
    var body = document.body;

    if (enteredCode === correctCode) {
        showElement(successMessage);
        audio.play(); // Reproduz o áudio quando o código estiver correto
        body.classList.add('glitch-text'); // Adiciona o efeito de glitch ao texto
        document.body.classList.add('glitch-effect'); // Adiciona o efeito de glitch ao corpo da página
    } else {
        hideElement(successMessage);
        showMessage(errorContainer);
        audio.pause(); // Pausa o áudio quando o código estiver incorreto
        audio.currentTime = 0; // Define o áudio para o início para a próxima reprodução
        body.classList.remove('glitch-text'); // Remove o efeito de glitch do texto
        body.classList.remove('refraction-effect'); // Remove o efeito de refração do corpo da página
    }
}

function showMessage(element) {
    element.style.display = 'block';
}

function showElement(element) {
    element.style.display = 'block';
}

function hideElement(element) {
    element.style.display = 'none';
}

// Oculta a mensagem de sucesso ao carregar a página
hideElement(document.getElementById('successMessage'));

function updateCountdown() {
    const countdownDate = new Date("2023-11-25T15:30:00").getTime();

    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    
    if (distance > 0) {
        countdownElement.innerHTML = `
            <span class="days">${days}d</span>
            <span class="hours">${hours}h</span>
            <span class="minutes">${minutes}m</span>
            <span class="seconds">${seconds}s</span>
        `;
    } else {
        clearInterval(interval);
        countdownElement.classList.add("expired");
        countdownElement.textContent = "EXPIRED";
    }
}
window.onload = function() {
    updateCountdown();
};
window.onload = function() {
    updateCountdown(); // Chama a função uma vez ao carregar a página para exibir a contagem inicial
    setInterval(updateCountdown, 1000); // Atualiza a contagem a cada segundo
};