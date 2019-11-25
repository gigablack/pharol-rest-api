import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { People } from './interfaces/people.interface';
import { PeopleDTO } from './dto/people.dto';
import { peopleValidationSchema } from './validationSchemas/peopleValidation.schema';

@Injectable()
export class PeopleService {
    constructor(@InjectModel('People') private readonly personModel: Model<People>) {}

    sendError(err) {
        return {
            status: 'error',
            error: err.errmsg,
        };
    }

    async getAllPeople() {
        try {
            return await this.personModel.find();
        } catch (error) {
            return this.sendError(error);
        }
    }

    async getPerson(id: string) {
        try {
            return this.personModel.findById(id);
        } catch (error) {
            return this.sendError(error);
        }
    }

    async createPerson(person: PeopleDTO) {
        try {
            const newPerson = new this.personModel(person);
            await newPerson.save();
            return {
                status: 'success',
                message: 'Persona creada satisfactoriamente',
                person: newPerson,
            };
        } catch (error) {
            return this.sendError(error);
        }
    }

    async updatePerson(id: string, person: PeopleDTO) {
        try {
            const updatedPerson = await this.personModel.findByIdAndUpdate(id, person, {new: true});
            return {
                status: 'success',
                message: 'Persona actualizada satisfactoriamente',
                person: updatedPerson,
            };
        } catch (error) {
            return this.sendError(error);
        }
    }

    async deletePerson(id: string) {
        try {
            const deletedPerson = await this.personModel.findByIdAndRemove(id);
            return {
                status: 'success',
                message: 'Persona eliminada satisfactoriamente',
                person: deletedPerson,
            };
        } catch (error) {
            return this.sendError(error);
        }
    }

    async getPeopleBy(key: string, val: string) {
        try {
            const people = await this.personModel.find({ [key]: val });
            if (people.length > 0) {
                return people;
            } else {
                return {
                    status: 'error',
                    message: `No hay registros con ese ${key}`,
                };
            }
        } catch (error) {
            return this.sendError(error);
        }
    }

    async getPersonBy(key: string, val: string) {
        try {
            const person = await this.personModel.findOne({ [key]: val });
            if (person) {
                return person;
            } else {
                return {
                    status: 'error',
                    message: `No hay registros con ese ${key}`,
                };
            }
        } catch (error) {
            return this.sendError(error);
        }
    }
}
