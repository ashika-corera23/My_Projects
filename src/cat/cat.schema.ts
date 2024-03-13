 import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
 import { Document } from "mongoose";

 @Schema({ collection: 'cat' })
 export class cat extends Document
 {
    @Prop()
    name:string;
 }

 export const catSchema = SchemaFactory.createForClass(cat)