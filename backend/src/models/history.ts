import mongoose, { Schema, Document } from 'mongoose';

interface IHistory extends Document {
  userId: string;
  itemType: 'song' | 'podcast';
  itemId: string;
  listenedAt: Date;
}

const HistorySchema: Schema = new Schema({
  userId: { type: String, required: true },
  itemType: { type: String, enum: ['song', 'podcast'], required: true },
  itemId: { type: String, required: true },
  listenedAt: { type: Date, default: Date.now },
});

const history = mongoose.model<IHistory>('History', HistorySchema);

export default history;
