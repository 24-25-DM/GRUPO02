import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { registrarIntegrante } from "../controllers/LoginController";

export default function RegistroPantalla({ navigation }) {
    const [nombre, setNombre] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    const handleRegister = () => {
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        if (contrasenia.length === 8) {

            if (contrasenia.endsWith("#") || contrasenia.endsWith("@") || contrasenia.endsWith("_") || contrasenia.endsWith("!")) {

                if (contrasenia.includes(numeros === 3) ) {

                    if (contrasenia.toLocaleUpperCase >= 2) {

                        if (contrasenia.toLocaleUpperCase < 3) {
                            if (!nombre || !contrasenia) {
                                alert("Por favor, complete todos los campos.");
                                return;
                            }
                            registrarIntegrante(nombre, contrasenia);
                            alert("Registro exitoso");
                            navigation.navigate("LoginPantalla");


                        } else {
                            alert("La contraseña debe tener Máximo 3 minúsculas");
                            return;

                        }


                    } else {
                        alert("La contraseña debe tener Al menos 2 Mayúsculas");
                        return;

                    }




                } else {
                    alert("La contraseña debe tener exactamente 3 numeros");
                    return;

                }



            } else {
                alert("La contraseña debe tener alguno de los siguientes caracteres #@_!");
                return;

            }





        } else {
            alert("La contraseña debe tener Al menos 2 Mayúsculas");
            return;
        }
    };

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
            <Text style={styles.label2}>La Contraseña debe Tener al menos 8 Caracteres:</Text>
            <Text style={styles.label2}>- Al menos 2 Mayúsculas</Text>
            <Text style={styles.label2}>- Máximo 3 Minúsculas</Text>
            <Text style={styles.label2}>- Exactamente 3 Números</Text>
            <Text style={styles.label2}>- Debe terminar con cualquiera de los siguientes caracteres "#@_!"</Text>

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
    label2: {
        fontSize: 10,
        marginBottom: 5,
        fontWeight: "bold",
        color: "#333",

    },
});
