
import vehiculos from "../models/vehiculos";

export const obtenerVehiculos = () =>  vehiculos;

export const agregarVehiculo = (nuevoVehiculo) => {
    console.log(nuevoVehiculo)
    vehiculos.push(nuevoVehiculo);
};