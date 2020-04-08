import { Schema } from 'mongoose';
import * as connections from '../../config/connection';
import { prop, modelOptions, buildSchema } from '@typegoose/typegoose';

@modelOptions({
    schemaOptions: { collection: 'booksmodel', versionKey: false },
})
export class Book {
    @prop({ trim: true })
    title?: string;

    @prop({ required: false })
    titleLength?: number;

    @prop({ required: true })
    description!: string;

    @prop({ required: true })
    code3!: string;

    @prop({ required: true })
    createAt!: Date;

    @prop({ required: true })
    updatedAt!: Date;
}

const BooksSchema: Schema = buildSchema(Book);

export default connections.db.model('BooksModel', BooksSchema);
