// DOM selectors
const form = document.querySelector(".form");
const bookCards = document.querySelector(".book-cards");
const AddButton = document.querySelector(".btn-add");
const ReadButtons = document.querySelectorAll(".btn-read");
const RemoveButtons = document.querySelectorAll(".btn-remove");

// Book list
const bookList = [
  {
    title: "Titre",
    author: "Author",
    pages: "100",
    isRead: false,
  },
];

// Book constructor
const Book = function (title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
};

// Add book to book list
const addBookToBookList = (bookList, book) => {
  bookList.push(book);
};

// Generate book cards
const generateBookCards = (books) => {
  bookCards.innerHTML = "";

  for (const book of books) {
    // Create elements
    const bookCard = document.createElement("div");
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

    // Add card
    bookCards.appendChild(bookCard);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBookList = bookList;
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#read").checked;

  const book = new Book(title, author, pages, isRead);
  addBookToBookList(newBookList, book);

  generateBookCards(newBookList);
});

generateBookCards(bookList);
