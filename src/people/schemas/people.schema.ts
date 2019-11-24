import { Schema } from 'mongoose';

export const PeopleSchema = new Schema({
    rut: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    sexo: {
        type: String,
        required: true,
    },
    direcciones: {
        type: [String],
        required: true,
    },
});
