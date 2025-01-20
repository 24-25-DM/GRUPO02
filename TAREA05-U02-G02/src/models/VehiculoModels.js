
import { SQLiteProvider } from 'expo-sqlite';


// Function to insert a new vehicle
export const insertVehicle = async (db, placa, marca, fecFabricacion, color, costo, activo) => {
    try {
        await db.runAsync(`
            INSERT INTO vehicles (placa, marca, fecFabricacion, color, costo, activo)
            VALUES (?, ?, ?, ?, ?, ?)`, [placa, marca, fecFabricacion, color, costo, activo]);
        console.log('Vehicle added successfully',[placa, marca, fecFabricacion, color, costo, activo]);
    } catch (error) {
        console.log('Error while inserting vehicle: ', error);
    }
};

// Function to get all vehicles
export const getAllVehicles = async (db) => {
    try {
        const vehicles = await db.allAsync('SELECT * FROM vehicles');
        return vehicles;
    } catch (error) {
        console.log('Error while fetching vehicles: ', error);
        return [];
    }
};

// Function to update a vehicle
export const updateVehicle = async (db, id, updatedData) => {
    const { placa,marca, fecFabricacion, color, costo, activo } = updatedData;
    try {
        await db.runAsync(`
            UPDATE vehicles SET placa = ?, marca = ?, fecFabricacion = ?, color = ?, costo = ?, activo = ?
            WHERE id = ?`, [placa,marca, fecFabricacion, color, costo, activo, id]);
        console.log('Vehicle updated successfully');
    } catch (error) {
        console.log('Error while updating vehicle: ', error);
    }
};

// Function to delete a vehicle
export const deleteVehicle = async (db, id) => {
    try {
        await db.runAsync('DELETE FROM vehicles WHERE id = ?', [id]);
        console.log('Vehicle deleted successfully');
    } catch (error) {
        console.log('Error while deleting vehicle: ', error);
    }
};


export const getVehicleById = async (db, id) => {
    try {
        const vehicle = await db.getFirstAsync('SELECT * FROM vehicles WHERE id = ?', [id]);
        if (vehicle) {
            console.log('Vehicle fetched successfully:', vehicle);
        } else {
            console.log('No vehicle found with the given ID.');
        }
        return vehicle;
    } catch (error) {
        console.log('Error while fetching vehicle by ID: ', error);
        return null;
    }
};