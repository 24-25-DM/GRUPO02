
import vehiculos from "../models/vehiculos";

export const obtenerVehiculos = () => vehiculos;

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
export const validarPlaca = (placa) => {
    //Valida que la placa este en el formato correcto AAA-000 letras mayusculas y numeros
    const regex = /^[ABCDEFGHIJKLMNÑOPQRSTUVWZ]{3}-[0-9]{3}$/;
    if (!regex.test(placa)) {
        return 2;
    }
    //Valida que la placa no tenga dos letras iguales seguidas
    for (let i = 0; i < placa.length - 1; i++) {
        if (placa[i] === placa[i + 1]) {
            return 3;
        }
    }
    //Valida que la placa no tenga la letra 'O' y el numero '0' al mismo tiempo
    if (placa.includes('O') && placa.includes('0')) {
        return 4;
    }
    //Valida que la placa no tenga las letras D, F, Q o Ñ
    if (placa.includes('D') || placa.includes('F') || placa.includes('Q') || placa.includes('Ñ')) {
        return 5;
        
    }
    return 1;
};