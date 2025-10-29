import mongoose, { Schema } from 'mongoose';
import { Update } from '../../types';

const updateSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
});

export default mongoose.model<Update>('Update', updateSchema);
