
import vehiculos from "../models/vehiculos";

export const obtenerVehiculos = () =>  vehiculos;

export const agregarVehiculo = (nuevoVehiculo) => {
    vehiculos.push(nuevoVehiculo);
};

export const editarVehiculo = (placa, datosActualizados) => {
    const index = vehiculos.findIndex(vehiculo => vehiculo.placa === placa);
    if (index !== -1) {
        vehiculos[index] = { ...vehiculos[index], ...datosActualizados };
    }
};

export const eliminarVehiculo = (placa) => {
    const index = vehiculos.findIndex(vehiculo => vehiculo.placa === placa);
    if (index !== -1) {
        vehiculos.splice(index, 1);
    }
};