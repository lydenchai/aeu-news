import { MongoObject } from './mongo-object';

export interface News extends MongoObject {
  title?: string;
  category?: string;
  description?: string;
  content?: string;
  date?: string;
  images: string[];
}
