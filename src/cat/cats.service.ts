import { Injectable } from '@nestjs/common';
import { cat } from './cat.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';

@Injectable()
export class catService {
   
   
    constructor(@InjectModel(cat.name) private readonly catModel: Model<cat>) { }

    async create(cat: cat): Promise<import("./cat.schema").cat> {
        //   throw new Error('Method not implemented.');
        const createcat = new this.catModel(cat)
        console.log("createcat>>>>", createcat);
        return createcat.save()

    }
    async getHello(): Promise<cat[]> {
        return this.catModel.find().exec()
    }
    async update(id: string, cat: cat): Promise<cat> {
        // throw new Error('Method not implemented.');
        return this.catModel.findByIdAndUpdate(id,cat).exec()
    }
    async delete(id: string): Promise<cat> {
        // throw new Error('Method not implemented.');
        return  this.catModel.findByIdAndDelete(id).exec()
   }

}