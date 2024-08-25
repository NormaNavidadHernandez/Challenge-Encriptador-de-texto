// script.js
document.getElementById('encrypt-btn').addEventListener('click', function() {
    let text = document.getElementById('input-text').value;
    let encryptedText = encryptText(text);
    document.getElementById('output-message').textContent = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let text = document.getElementById('input-text').value;
    let decryptedText = decryptText(text);
    document.getElementById('output-message').textContent = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let text = document.getElementById('output-message').textContent;
    navigator.clipboard.writeText(text).then(function() {
        alert('Texto copiado al portapapeles');
    });
});

function encryptText(text) {
    // Lógica de encriptación simple (puedes reemplazarla con la lógica que prefieras)
    return text.split('').reverse().join('');
}

function decryptText(text) {
    // Lógica de desencriptación correspondiente
    return text.split('').reverse().join('');
}
