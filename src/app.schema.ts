import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type AppDocument = App & Document;

@Schema({
    timestamps: true,
    versionKey: false
})
export class App {
    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: String, required: true })
    lastname: string;

    @Prop({ type: String, required: true })
    year: string;

    @Prop({ type: String, required: true })
    dni: string;
}

export const AppSchema = SchemaFactory.createForClass(App);