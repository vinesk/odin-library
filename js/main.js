// Book
class Book {
  constructor(
    title = "Unkown",
    author = "Unkown",
    pages = "0",
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// Library
class Library {
  constructor() {
    this.books = [];
  }

  // Add book
  addBook(newBook) {
    if (!this.isInMyLibrary(newBook)) {
      this.books.push(newBook);
    }
  }

  // Is in my library
  isInMyLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  }

  // Remove book
  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }
}

const myLibrary = new Library();

// Update book cards
const updateBookCards = () => {
  const bookCards = document.querySelector(".book-cards");
  const books = myLibrary.books;

  bookCards.innerHTML = "";
  books.forEach((book) => {
    const bookCard = createBookCard(book);
    bookCards.appendChild(bookCard);
  });

  // Read book
  readBook();

  // Remove book
  removeBook();
};

// Create book cards
const createBookCard = (book) => {
  // Create elements
  const bookCard = document.createElement("article");
  const title = document.createElement("h2");
  const author = document.createElement("h3");
  const pages = document.createElement("p");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  // Add attributes
  bookCard.classList.add("book-card");
  title.classList.add("title");
  author.classList.add("author");
  pages.classList.add("pages");
  readBtn.classList.add("btn", "btn-read");
  if (!book.isRead) {
    readBtn.classList.add("btn-red");
  }
  removeBtn.classList.add("btn", "btn-remove");

  // Add text contents
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  readBtn.textContent = book.isRead ? "Read" : "Not read";
  removeBtn.textContent = "Remove";

  // Create card
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readBtn);
  bookCard.appendChild(removeBtn);

  return bookCard;
};

// Add book
const addBook = () => {
  const form = document.querySelector(".form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const isRead = document.querySelector("#read").checked;
    const book = new Book(title, author, pages, isRead);
    myLibrary.addBook(book);
    updateBookCards();
  });
};

// Sort in ascending order
const sortInAscendingOrder = () => {
  // DOM selector
  const plusButton = document.querySelector(".btn-plus");

  plusButton.addEventListener("click", () => {
    const books = myLibrary.books;
    books.sort((a, b) => (a.title < b.title ? -1 : 1));
    updateBookCards();
  });
};

// Sort in descending order
const sortInDescendingOrder = () => {
  // DOM selectors
  const minusButton = document.querySelector(".btn-minus");

  minusButton.addEventListener("click", () => {
    const books = myLibrary.books;
    books.sort((a, b) => (a.title > b.title ? -1 : 1));
    updateBookCards();
  });
};

// Read book
const readBook = () => {
  const readBtns = document.querySelectorAll(".btn-read");
  const books = myLibrary.books;

  readBtns.forEach((readBtn, index) => {
    readBtn.addEventListener("click", () => {
      books[index].isRead = !books[index].isRead;
      updateBookCards();
    });
  });
};

// Remove book
const removeBook = () => {
  const removeBtns = document.querySelectorAll(".btn-remove");
  const books = myLibrary.books;

  removeBtns.forEach((removeBtn, index) => {
    removeBtn.addEventListener("click", () => {
      books.splice(index, 1);
      updateBookCards();
    });
  });
};

updateBookCards();
addBook();
sortInAscendingOrder();
sortInDescendingOrder();
