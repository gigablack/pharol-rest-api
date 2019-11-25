import { Controller, Get, Post, Put, Delete, Param, Body, Res, UsePipes } from '@nestjs/common';
import { PeopleDTO } from './dto/people.dto';
import { Response } from 'express';
import { PeopleService } from './people.service';
import { peopleValidationSchema } from './validationSchemas/peopleValidation.schema';
import { JoiValidationPipe } from '../joi-validation.pipe';
import { ParamValidationPipe } from '../param-validation.pipe';
import * as Joi from '@hapi/joi';

@Controller('people')
export class PeopleController {
    constructor(private peopleService: PeopleService) {}

    @Get()
    async getAllPeople(@Res() res: Response) {
        // return all people
        return res.json(await this.peopleService.getAllPeople());
    }

    @Post('/create')
    @UsePipes(new JoiValidationPipe(peopleValidationSchema))
    async createPerson(@Body() person: PeopleDTO, @Res() res: Response) {
        // create a person
        return res.json(await this.peopleService.createPerson(person));
    }

    @Get('/:id')
    async getPerson(@Param('id') id: string, @Res() res: Response) {
        // return one person
        return res.json(await this.peopleService.getPerson(id));
    }

    @Put('/:id')
    @UsePipes(new JoiValidationPipe(peopleValidationSchema))
    async updatePerson(@Param('id') id: string, @Body() person: PeopleDTO, @Res() res: Response) {
        // update person
        return res.json(await this.peopleService.updatePerson(id, person));
    }

    @Delete('/:id')
    async deletePerson(@Param('id') id: string, @Res() res: Response) {
        // delete person
        return res.json(await this.peopleService.deletePerson(id));
    }

    @Get('/rut/:rut')
    @UsePipes(new ParamValidationPipe(Joi.string().min(9).max(10).pattern(/\d+-[\d|k]/)))
    async getPersonByRut(@Param('rut') rut: string, @Res() res: Response) {
        // return the person with the given rut
        return res.json(await this.peopleService.getPersonBy('rut', rut));
    }

    @Get('/nombre/:nombre')
    @UsePipes(new ParamValidationPipe(Joi.string().max(20).pattern(/^[A-Z][a-z]+/)))
    async getPeopleByName(@Param('nombre') name: string, @Res() res: Response) {
        // return all the people with the given name
        return res.json(await this.peopleService.getPeopleBy('nombre', name));
    }

    @Get('/apellido/:apellido')
    @UsePipes(new ParamValidationPipe(Joi.string().max(20).pattern(/^[A-Z][a-z]+/)))
    async getPeopleByLastName(@Param('apellido') lastname: string, @Res() res: Response) {
        // return all the people with the given lastname
        return res.json(await this.peopleService.getPeopleBy('apellido', lastname));
    }

    @Get('/email/:email')
    @UsePipes(new ParamValidationPipe(Joi.string().email()))
    async getPersonByEmail(@Param('email') email: string, @Res() res: Response) {
        // return the person with the given email
        return res.json(await this.peopleService.getPersonBy('email', email));
    }

    @Get('/telefono/:telefono')
    @UsePipes(new ParamValidationPipe(Joi.string().max(12).pattern(/^[+]\d{11}/)))
    async getPeopleByPhone(@Param('telefono') phone: string, @Res() res: Response) {
        // return all the people with the given phone
        return res.json(await this.peopleService.getPeopleBy('telefono', phone));
    }

    @Get('/sexo/:sexo')
    @UsePipes(new ParamValidationPipe(Joi.string().valid('Masculino', 'Femenino')))
    async getPeopleBySex(@Param('sexo') sex: string, @Res() res: Response) {
        // return all the people with the given sex
        return res.json(await this.peopleService.getPeopleBy('sexo', sex));
    }
}
