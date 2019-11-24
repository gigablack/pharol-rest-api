import * as Joi from '@hapi/joi';

export const peopleValidationSchema = Joi.object({
    rut: Joi.string().min(9).max(10).pattern(/\d+-[\d|k]/).required(),
    nombre: Joi.string().max(20).pattern(/^[A-Z][a-z]+/).required(),
    apellido: Joi.string().max(20).pattern(/^[A-Z][a-z]+/).required(),
    email: Joi.string().email().required(),
    telefono: Joi.string().pattern(/^[+]\d{2}[(]\d{3}[)]\d{3}-\d{3}/).required(),
    sexo: Joi.string().valid('MALE', 'FEMALE').required(),
    direcciones: Joi.array().items(Joi.string()),
});
