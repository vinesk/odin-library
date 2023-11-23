// Book list
const bookList = [];

// Book constructor
const Book = function (title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
};

// New book
const book1 = new Book("Titre 1", "Author 1", "100", false);
const book2 = new Book("Titre 2", "Author 2", "100", true);
const book3 = new Book("Titre 3", "Author 3", "100", false);

// Add new book to book list
bookList.push(book1);
bookList.push(book2);
bookList.push(book3);

// DOM selectors
const bookCards = document.querySelector(".book-cards");
const btnAdd = document.querySelector(".btn-add");
const btnRead = document.querySelectorAll(".btn-read");

const generateBookCards = (bookList) => {
  for (const book of bookList) {
    // Create elements
    const bookCard = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("p");
    const btnRead = document.createElement("button");
    const btnRemove = document.createElement("button");

    // Add classes
    bookCard.classList.add("book-card");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    btnRead.classList.add(
      "btn",
      "btn-read",
      book.isRead ? "btn-green" : "btn-red"
    );
    btnRemove.classList.add("btn", "btn-remove");

    // Add text contents
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    btnRead.textContent = book.isRead ? "Read" : "Not read";
    btnRemove.textContent = "Remove";

    // Create card
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(btnRead);
    bookCard.appendChild(btnRemove);

    // Add card
    bookCards.appendChild(bookCard);
  }
};

generateBookCards(bookList);
