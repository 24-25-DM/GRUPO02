import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button, Alert } from "react-native";
import { obtenerVehiculos, eliminarVehiculo } from "../controllers/VehiculoConstroller";
import { useSQLiteContext } from 'expo-sqlite';
import { useIsFocused } from '@react-navigation/native';

const VehiculosPantalla = ({ navigation }) => {
    const isFocused = useIsFocused();
    const db = useSQLiteContext();
    const [vehiculos, setVehiculos] = useState([]); // Estado local para manejar la lista de vehículos

    // Obtener vehículos desde la base de datos cuando se monta el componente
    const fetchVehiculos = async () => {
        try {
            const allRows = await db.getAllAsync("SELECT * FROM vehicles");
            console.log("Lista de viculos",allRows)
            setVehiculos(allRows);
        } catch (error) {
            console.log("Error while loading vehicles:", error);
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: false, // Esto elimina el encabezado con la flecha de retroceso
        });
        if (isFocused) {
            fetchVehiculos(); // Actualiza la lista solo cuando la pantalla está activa
        }
    }, [isFocused, navigation]);
    
    const handleSignOut = async () => {
        try {
            // Cierra la sesión de Firebase
                navigation.reset({
                index: 0, // Esto indica que la nueva pantalla será la principal
                routes: [{ name: "LoginPantalla" }], // Reemplaza "Login" con el nombre de tu pantalla de inicio de sesión
            });
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    const handleDelete = (id) => {
        Alert.alert(
            "Confirmar eliminación",
            "¿Estás seguro de que deseas eliminar este vehículo?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Confirmar",
                    onPress: async () => {
                        await eliminarVehiculo(db, id); // Eliminar el vehículo desde la base de datos
                        const updatedVehiculos = await db.getAllAsync('SELECT * FROM vehicles'); // Obtener la lista de vehículos actualizada
                        setVehiculos(updatedVehiculos); // Actualizar el estado con los vehículos actualizados
                        alert("Vehículo eliminado");
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={vehiculos}
                keyExtractor={(item) => item.id.toString()} // Usa el id como clave única para cada item
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.label}>Placa:</Text>
                        <Text style={styles.value}>{item.placa.toUpperCase()}</Text>

                        <Text style={styles.label}>Marca:</Text>
                        <Text style={styles.value}>{item.marca}</Text>

                        <Text style={styles.label}>Fecha de Fabricación:</Text>
                        <Text style={styles.value}>{item.fecFabricacion}</Text>

                        <Text style={styles.label}>Color:</Text>
                        <Text style={styles.value}>{item.color}</Text>

                        <Text style={styles.label}>Costo:</Text>
                        <Text style={styles.value}>{`${item.costo} $`}</Text>

                        <Text style={styles.label}>Activo:</Text>
                        <Text style={styles.value}>{item.activo ? "Sí" : "No"}</Text>

                        <Button title="Editar" onPress={() => navigation.navigate("EditarVehiculoPantalla", { id:item.id })} />
                        <Button title="Eliminar" onPress={() => handleDelete(item.id)} color="red" />
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate("NuevoVehiculoPantalla")}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleSignOut}
            >
                <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    label: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#555",
    },
    value: {
        fontSize: 14,
        color: "#333",
        marginBottom: 5,
    },
    addButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#2196F3",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    addButtonText: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
    },
    logoutButton: {
        position: "absolute",
        top: 35,
        right: 20,
        backgroundColor: "#d32f2f",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logoutButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default VehiculosPantalla;
