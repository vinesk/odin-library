// DOM selectors
const form = document.querySelector(".form");
const bookCards = document.querySelector(".book-cards");
const addButton = document.querySelector(".btn-add");
const plusButton = document.querySelector(".btn-plus");
const minusButton = document.querySelector(".btn-minus");
const readButtons = document.querySelectorAll(".btn-read");
const removeButtons = document.querySelectorAll(".btn-remove");

// Books
const books = [
  {
    title: "Titre 1",
    author: "Author 1",
    pages: "100",
    isRead: false,
  },
  {
    title: "Titre 2",
    author: "Author 2",
    pages: "150",
    isRead: true,
  },
];

// Generate book cards
const generateBookCards = (books) => {
  bookCards.innerHTML = "";

  for (const book of books) {
    // Create elements
    const bookCard = document.createElement("article");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("p");
    const readButton = document.createElement("button");
    const removeButton = document.createElement("button");

    // Add classes
    bookCard.classList.add("book-card");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    readButton.classList.add(
      "btn",
      "btn-read",
      book.isRead ? "btn-green" : "btn-red"
    );
    removeButton.classList.add("btn", "btn-remove");

    // Add text contents
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    readButton.textContent = book.isRead ? "Read" : "Not read";
    removeButton.textContent = "Remove";

    // Create card
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);

    // Add card to the DOM
    bookCards.appendChild(bookCard);
  }
};

// First display
generateBookCards(books);

// Sort in ascending order
plusButton.addEventListener("click", () => {
  const newBooks = Array.from(books);
  newBooks.sort((a, b) => (a.title < b.title ? -1 : 1));
  generateBookCards(newBooks);
});

// Sort in descending order
minusButton.addEventListener("click", () => {
  const newBooks = Array.from(books);
  newBooks.sort((a, b) => (a.title > b.title ? -1 : 1));
  generateBookCards(newBooks);
});

// Book constructor
const Book = function (title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
};

// Add book to book list
const addBookTobooks = (books, book) => {
  books.push(book);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBooks = Array.from(books);

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#read").checked;

  const book = new Book(title, author, pages, isRead);
  addBookTobooks(newBooks, book);

  generateBookCards(newBooks);
});
