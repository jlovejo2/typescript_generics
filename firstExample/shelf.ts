//example of generic class that solves problem with book and magazine having duplicated code
export class Shelf<T> {
  _items: T[] = [];

  addBookToCatalog(newItem: T) {

  }

  removeBookFromCatalog(oldItem: T) {
    
  }
}