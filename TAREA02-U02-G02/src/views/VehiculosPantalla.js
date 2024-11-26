import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { obtenerVehiculos } from "../controllers/VehiculoConstroller";

const VehiculosPantalla = ({ navigation }) => {
    const vehiculos = obtenerVehiculos();

    return (
        <View style={styles.container}>
            <FlatList
                data={vehiculos}
                keyExtractor={(item) => item.placa}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.label}>Placa:</Text>
                        <Text style={styles.value}>{item.placa}</Text>

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
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => navigation.navigate("NuevoVehiculoPantalla")}
            >
                <Text style={styles.floatingButtonText}>+</Text>
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
    floatingButton: {
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
    floatingButtonText: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
    },
});

export default VehiculosPantalla;
