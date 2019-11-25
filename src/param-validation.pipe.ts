import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import * as Joi from '@hapi/joi';

@Injectable()
export class ParamValidationPipe implements PipeTransform {
  constructor(private readonly schema: Joi.Schema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(error.message);
    }
    return value;
  }
}
