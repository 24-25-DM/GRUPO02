import CryptoJS from "crypto-js";
import integrantes from "../models/Integrantes";

// Función de hash usando crypto-js
function hash(contrasenia) {
    const hashHex = CryptoJS.SHA256(contrasenia).toString(CryptoJS.enc.Hex);
    return hashHex;
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
