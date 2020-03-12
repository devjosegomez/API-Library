import {DefaultCrudRepository} from '@loopback/repository';
import {Book, BookRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BookRepository extends DefaultCrudRepository<
  Book,
  typeof Book.prototype.id,
  BookRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Book, dataSource);
  }
}
