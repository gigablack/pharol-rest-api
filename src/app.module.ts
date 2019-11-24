import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { PeopleModule } from './people/people.module';

config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true}), PeopleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
