const cipherRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function normalizeText(text) {
    return text
        .toLowerCase()  // Convierte todo el texto a minúsculas.
        .normalize("NFD")  // Descompone caracteres acentuados en su forma base más un símbolo de acento.
        .replace(/[\u0300-\u036f]/g, "")  // Elimina los símbolos de acento.
        .replace(/[^a-z\s]/g, '');  // Elimina cualquier carácter que no sea una letra o un espacio.
}

function isValidText(text) {
    const hasUppercase = /[A-Z]/.test(text);  // Verifica si hay letras mayúsculas.
    const hasAccents = /[áéíóúÁÉÍÓÚñÑ]/.test(text);  // Verifica si hay letras con acento o ñ.
    
    return !hasUppercase && !hasAccents;  // Retorna true si no hay mayúsculas ni acentos.
}

function encrypt(text) {
    text = normalizeText(text);  // Normaliza el texto.
    return text.replace(/[eioua]/g, match => cipherRules[match]);  // Reemplaza cada vocal con su correspondiente cadena en `cipherRules`.
}

function decrypt(text) {
    text = normalizeText(text);  // Normaliza el texto.
    for (let key in cipherRules) {
        const value = cipherRules[key];
        text = text.split(value).join(key);  // Reemplaza cada cadena de cifrado con su vocal original.
    }
    return text;
}

document.getElementById('encryptButton').addEventListener('click', () => {
    const input = document.getElementById('inputText').value;
    
    if (!isValidText(input)) {
        alert("El texto contiene mayúsculas o caracteres con acento. Por favor, ingrese solo letras minúsculas sin acentos.");
        return;
    }

    const output = encrypt(input);
    document.getElementById('outputText').value = output;
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const input = document.getElementById('inputText').value;
    
    if (!isValidText(input)) {
        alert("El texto contiene mayúsculas o caracteres con acento. Por favor, ingrese solo letras minúsculas sin acentos.");
        return;
    }

    const output = decrypt(input);
    document.getElementById('outputText').value = output;
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});




