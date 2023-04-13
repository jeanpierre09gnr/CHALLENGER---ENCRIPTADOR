function encriptar() {
    const inputText = document.getElementById("inputText").value;
    const outputText = document.getElementById("outputText");
    const encriptedText = encriptarTexto(inputText);
    outputText.value = encriptedText;
}

function desencriptar() {
    const inputText = document.getElementById("inputText").value;
    const outputText = document.getElementById("outputText");
    const desencriptedText = desencriptarTexto(inputText);
    outputText.value = desencriptedText;
}

function encriptarTexto(texto) {
    let textoEncriptado = texto;
    textoEncriptado = textoEncriptado.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
    let texto = textoEncriptado;
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}