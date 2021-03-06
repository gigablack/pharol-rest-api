import * as Joi from '@hapi/joi';

export const peopleValidationSchema = Joi.object({
    rut: Joi.string().min(9).max(10).pattern(/\d+-[\d|k]/).required(),
    nombre: Joi.string().max(20).pattern(/^[A-Z][a-z]+/).required(),
    apellido: Joi.string().max(20).pattern(/^[A-Z][a-z]+/).required(),
    email: Joi.string().email().required(),
    telefono: Joi.string().max(12).pattern(/^[+]\d{11}/).required(),
    sexo: Joi.string().valid('Masculino', 'Femenino').required(),
    direcciones: Joi.array().items(Joi.string().required()).required(),
});
