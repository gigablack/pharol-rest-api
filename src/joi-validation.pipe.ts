import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import * as Joi from '@hapi/joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: Joi.ObjectSchema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error && typeof(value) !== 'string') {
      const { context: { key, value: val } } = error.details[0];
      const messagePrefix = `el campo "${key}" con el valor "${val}"`;
      switch (key) {
        case 'rut':
          error.message = `${messagePrefix} debe seguir el siguiente patrón "12345678-9" o "12345678-k" y debe contener entre 9 y 10 caracteres incluyendo el guion`;
          break;
        case 'nombre':
        case 'apellido':
          error.message = `${messagePrefix} debe empezar por una letra mayuscula seguido de letras minusculas y un máximo de 20 caracteres sin espacios`;
          break;
        case 'email':
          error.message = `${messagePrefix} debe ser una dirección de email válida.`;
          break;
        case 'telefono':
          error.message = `${messagePrefix} debe ser un numero telefónico con el siguiente patron +56(123)456-789.`;
          break;
        case 'sexo':
          error.message = `${messagePrefix} debe ser uno de los siguientes valores "Masculino", "Femenino"`;
          break;
        case 'direcciones':
          error.message = `${messagePrefix} debe contener al menos una direccion de residencia`;
          break;
      }
      throw new BadRequestException(error.message);
    }
    return value;
  }
}
