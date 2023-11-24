// DOM selectors
const form = document.querySelector(".form");
const plusButton = document.querySelector(".btn-plus");
const minusButton = document.querySelector(".btn-minus");
const bookCards = document.querySelector(".book-cards");

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

// Book constructor
const Book = function (title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
};

// Generate book cards
const generateBookCards = (books) => {
  for (let i = 0; i < books.length; i++) {
    // Create elements
    const bookCard = document.createElement("article");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("p");
    const readButton = document.createElement("button");
    const removeButton = document.createElement("button");

    // Add attributes
    bookCard.classList.add("book-card");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    readButton.classList.add(
      "btn",
      "btn-read",
      books[i].isRead ? "btn-green" : "btn-red"
    );
    readButton.dataset.id = i;
    removeButton.classList.add("btn", "btn-remove");
    removeButton.dataset.id = i;

    // Add text contents
    title.textContent = books[i].title;
    author.textContent = books[i].author;
    pages.textContent = `${books[i].pages} pages`;
    readButton.textContent = books[i].isRead ? "Read" : "Not read";
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
  readBook();
  removeBook();
};

// Add book
const addBook = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const isRead = document.querySelector("#read").checked;
    const book = new Book(title, author, pages, isRead);
    books.push(book);
    bookCards.innerHTML = "";
    generateBookCards(books);
  });
};

// Sort in ascending order
const sortInAscendingOrder = () => {
  plusButton.addEventListener("click", () => {
    books.sort((a, b) => (a.title < b.title ? -1 : 1));
    bookCards.innerHTML = "";
    generateBookCards(books);
  });
};

// Sort in descending order
const sortInDescendingOrder = () => {
  minusButton.addEventListener("click", () => {
    books.sort((a, b) => (a.title > b.title ? -1 : 1));
    bookCards.innerHTML = "";
    generateBookCards(books);
  });
};

// Read book
const readBook = () => {
  const readButtons = document.querySelectorAll(".btn-read");
  for (const readButton of readButtons) {
    readButton.addEventListener("click", (e) => {
      console.log(e.target.dataset.id);
    });
  }
};

// Remove book
const removeBook = () => {
  const removeButtons = document.querySelectorAll(".btn-remove");
  for (const removeButton of removeButtons) {
    removeButton.addEventListener("click", (e) => {
      books.splice(e.target.dataset.id, 1);
      bookCards.innerHTML = "";
      generateBookCards(books);
    });
  }
};

// First display
generateBookCards(books);
addBook();
sortInAscendingOrder();
sortInDescendingOrder();
