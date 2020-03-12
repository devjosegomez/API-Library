import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Book extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  author: string;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'date',
    required: true,
  })
  publisedDate: string;

  @property({
    type: 'array',
    itemType: 'string',
    default: ["https://i.imgur.com/LwlRKj6.png"],
  })
  imgURL?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  borrowedBy?: string[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = Book & BookRelations;
