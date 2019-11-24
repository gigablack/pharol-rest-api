import { Controller, Get, Post, Put, Delete, Param, Body, Res, UsePipes } from '@nestjs/common';
import { PeopleDTO } from './dto/people.dto';
import { Response } from 'express';
import { PeopleService } from './people.service';
import { peopleValidationSchema } from './validationSchemas/peopleValidation.schema';
import { JoiValidationPipe } from '../joi-validation.pipe';

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
}
