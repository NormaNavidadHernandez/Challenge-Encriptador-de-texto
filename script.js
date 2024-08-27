const cipherRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z\s]/g, '');
}

function encrypt(text) {
    text = normalizeText(text);
    return text.replace(/[eioua]/g, match => cipherRules[match]);
}

function decrypt(text) {
    text = normalizeText(text);
    for (let key in cipherRules) {
        const value = cipherRules[key];
        text = text.split(value).join(key);
    }
    return text;
}

document.getElementById('encryptButton').addEventListener('click', () => {
    const input = document.getElementById('inputText').value;
    const output = encrypt(input);
    document.getElementById('outputText').value = output;
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const input = document.getElementById('inputText').value;
    const output = decrypt(input);
    document.getElementById('outputText').value = output;
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});



