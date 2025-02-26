import { MongoObject } from './mongo-object';

export interface Event extends MongoObject {
  id: any;
  title: string;
  category: string;
  description: string;
  date: string;
}
