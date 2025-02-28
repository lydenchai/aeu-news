import { MongoObject } from './mongo-object';

export interface Slids extends MongoObject {
  title?: string;
  img?: string;
  date?: string;

  
}
