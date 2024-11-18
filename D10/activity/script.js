// Instructions:In this activity, you will create a Library Management System using JavaScript OOP concepts such as encapsulation, inheritance, and polymorphism. The system will allow users to add books to the library, search for books, and display the list of available books.
Instructions:

// 1. Create a class called Book with the following properties:
// Title (string)
// Author (string)
// Genre (string)
// Availability (boolean)
// 2. Implement methods in the Book class:
// borrowBook(): This method should set the availability of the book to false if the book is available to borrow.
// returnBook(): This method should set the availability of the book to true if the book is returned.
// displayInfo(): This method should display the information of the book (title, author, genre, availability).
// 3. Create a class called Library that will act as the main system. The Library class should have the following properties and methods:
// Property: books (array) - to store the list of books in the library.
// Method: addBook(title, author, genre): This method should create a new Book object and add it to the books array.
// Method: searchBook(title): This method should search for a book by title and display its information if found.
// Method: displayBooks(): This method should display the list of all available books in the library.
// 4. Test your Library Management System by performing the following actions:
// Create an instance of the Library class.
// Use the addBook() method to add several books to the library.
// Use the searchBook() method to search for a specific book and display its information.
// Use the displayBooks() method to display the list of available books in the library.


class Book {
  constructor(title, author, genre, availability = true) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.availability = availability;
  }

  borrowBook = function () {
    this.availability = false;
    console.log('availability: ', this.availability);
  };

  returnBook = function () {
    this.availability = true;
    console.log('availability: ', this.availability);
  };

  displayInfo = function () {
    for (let key in this) {
      if (typeof this[key] !== 'function') {
        if (key !== 'availability') {
          console.log(`${key}: ${this[key]}`);
        } else {
          console.log(`${key}: ${this[key] ? `Yes` : `No`}`);
        }
      }
    }
  };
}

class Library {
  constructor(books) {
    this.books = [];
  }
  addBook = function (title, author, genre) {
    const newBook = new Book();
    newBook.title = title;
    newBook.author = author;
    newBook.genre = genre;

    this.books.push(newBook);
    console.log(this.books);
  };
  searchBook = function (title) {
    this.books.forEach((book) => {
      if (book.title === title) {
        console.log('Your book has been found!');
        book.displayInfo();
        return;
      }
    });
  };
  displayBooks = function () {
    console.log('List of books available:\n');
    this.books.forEach((book) => {
      console.log(book.title);
    });
  };
}
