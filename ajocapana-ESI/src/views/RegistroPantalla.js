import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { registrarIntegrante } from "../controllers/LoginController";

export default function RegistroPantalla({ navigation }) {
    const [nombre, setNombre] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    const handleRegister = () => {
        if (!nombre || !contrasenia) {
            alert("Por favor, complete todos los campos.");
            return;
        }
        if(validarContrasenia(contrasenia)===false){
            //alert("La contraseña debe tener exactamente 8 caracteres, contener al menos 2 letras mayúsculas, como máximo 3 letras minúsculas, exactamente 3 números y terminar con uno de los siguientes caracteres: #@_!");
            return;
        }
        registrarIntegrante(nombre, contrasenia);
        alert("Registro exitoso");
        navigation.navigate("LoginPantalla");
    };

    function validarContrasenia(contrasenia) {
        //const longitudCorrecta = contrasenia.length === 8;
        //verificacion de la cantidad de mayusculas de la a a la z con un tamanio de al menos 2
        const alMenos2Mayusculas = (contrasenia.match(/[A-Z]/g) || []).length >= 2;
        //verificacion de la cantidad de minusculas de la a a la z con un tamanio de maximo 3
        const maximo3Minusculas = (contrasenia.match(/[a-z]/g) || []).length <= 3;
        //verificacion de la cantidad de numeros con un tamanio de exactamente 3
        const exactamente3Numeros = (contrasenia.match(/\d/g) || []).length === 3;
        //verificacion de que la contrasenia termine con uno de los siguientes caracteres: #@_!
        const terminaConCaracterEspecial = /[#@_!]$/.test(contrasenia);
    
        //Verificacion de la longitud de la contrasenia
        if (contrasenia.length<=8) {
            alert("La contraseña debe tener almenos 8 caracteres.");
            return false;
        } else if (!alMenos2Mayusculas) {
            alert("La contraseña debe contener al menos 2 letras mayúsculas.");
            return false;
        } else if (!maximo3Minusculas) {
            alert("La contraseña debe contener como máximo 3 letras minúsculas.");
            return false;
        } else if (!exactamente3Numeros) {
            alert("La contraseña debe contener exactamente 3 números.");
            return false;
        } else if (!terminaConCaracterEspecial) {
            alert("La contraseña debe terminar con uno de los siguientes caracteres: #@_!");
            return false;
        } else {
            return true;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
                value={nombre}
                onChangeText={setNombre}
                style={styles.input}
                placeholder="Ingrese su nombre"
            />
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
                value={contrasenia}
                onChangeText={setContrasenia}
                secureTextEntry
                style={styles.input}
                placeholder="Ingrese su contraseña"
            />
            <Button title="Registrarse" onPress={handleRegister} color="#1E90FF" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
        justifyContent: "center",
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold",
        color: "#333",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
        fontSize: 16,
    },
});
