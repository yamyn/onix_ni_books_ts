import { Document, Schema } from 'mongoose';
import * as connections from '../../config/connection';
import { AggregationCursor } from 'mongodb';

export interface IBooksModel extends Document {
    title: string;
    titleLength?: number;
    description: string;
    code3: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IStatModel extends AggregationCursor {
    _id: number;
    number: number;
}
const BooksSchema: Schema = new Schema(
    {
        title: {
            type: String,
            trim: true,
        },
        titleLength: {
            type: Number,
            required: false,
        },
        description: {
            type: String,
            required: true,
        },
        code3: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            required: true,
        },
        updatedAt: {
            type: Date,
            required: true,
        },
    },
    {
        collection: 'booksmodel',
        versionKey: false,
    },
);

export default connections.db.model<IBooksModel>('BooksModel', BooksSchema);
