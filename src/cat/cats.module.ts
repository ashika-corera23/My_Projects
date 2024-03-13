 
import { Module } from "@nestjs/common";
import { catService } from "./cats.service";
import { MongooseModule, Schema } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { cat,catSchema } from "./cat.schema";
import { catController } from "./cats.controller";

@Module({
    imports: [MongooseModule.forFeature([{name:cat.name,schema:catSchema}])],
    controllers: [catController],
    providers: [catService]
})

 export class catmodule{}