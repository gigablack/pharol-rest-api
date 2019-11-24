import { Document } from 'mongoose';

export interface People extends Document {
    rut: string;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    sexo: string;
    direcciones: string[];
}
