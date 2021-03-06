import { Shelf } from "./Shelf";
import { Book } from "./Book";
import { Magazine } from "./Magazine";

let bookShelf: Shelf<Book> = new Shelf<Book>()

bookShelf.addBookToCatalog(new Book());

bookShelf.removeBookFromCatalog(new Magazine())