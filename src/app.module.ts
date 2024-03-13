import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { catmodule } from './cat/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0/nestjs_cat_crud'),catmodule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
