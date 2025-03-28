import { MongoObject } from './mongo-object';

export interface News extends MongoObject {
  title?: any;
  category?: string;
  description?: string;
  content?: string;
  date?: string;
  thumbnail: string;
  images: string[];
  save?: boolean;
}
