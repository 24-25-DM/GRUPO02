import CryptoJS from "crypto-js";
import integrantes from "../models/Integrantes";

// Función de hash usando crypto-js
function hash(contrasenia) {
    //validar que la contrasenia sea de 8 caracteres que contenga almenos 2 mayusculas maximo 3 minusculas exactamente 3 numeros y que termine con #@_!, si no se cumple mostrar que condicion no se cumple
    //validarContrasenia(contrasenia);
    const hashHex = CryptoJS.SHA256(contrasenia).toString(CryptoJS.enc.Hex);
    return hashHex;
}

function validarContrasenia(contrasenia) {
    //const longitudCorrecta = contrasenia.length === 8;
    const alMenos2Mayusculas = (contrasenia.match(/[A-Z]/g) || []).length >= 2;
    const maximo3Minusculas = (contrasenia.match(/[a-z]/g) || []).length <= 3;
    const exactamente3Numeros = (contrasenia.match(/\d/g) || []).length === 3;
    const terminaConCaracterEspecial = /[#@_!]$/.test(contrasenia);

    if (contrasenia.length<=8) {
        console.log("La contraseña debe tener almenos 8 caracteres.");
    } else if (!alMenos2Mayusculas) {
        console.log("La contraseña debe contener al menos 2 letras mayúsculas.");
    } else if (!maximo3Minusculas) {
        console.log("La contraseña debe contener como máximo 3 letras minúsculas.");
    } else if (!exactamente3Numeros) {
        console.log("La contraseña debe contener exactamente 3 números.");
    } else if (!terminaConCaracterEspecial) {
        console.log("La contraseña debe terminar con uno de los siguientes caracteres: #@_!");
    } else {
        console.log("La contraseña cumple con los requisitos.");
    }
}

export const autenticar = (nombre, contrasenia) => {
    // Generar el hash de la contraseña ingresada
    const hashedPassword = hash(contrasenia);
    console.log("Hashed password generada:", hashedPassword);

    // Comparar con los integrantes
    return integrantes.some(integrante => {
        return (
            integrante.nombre === nombre &&
            integrante.contrasenia === hashedPassword
        );
    });
};

export const registrarIntegrante = (nombre, contrasenia) => {
    const hashedPassword = hash(contrasenia);
    integrantes.push({ nombre,contrasenia: hashedPassword });
};