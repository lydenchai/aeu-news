import { MongoObject } from './mongo-object';

export interface Slide extends MongoObject {
  title?: string;
  img?: string;
  date?: string;
}
