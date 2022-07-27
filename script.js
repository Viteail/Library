const submitBtn = document.querySelector("#submit");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#page");
const inputRead = document.querySelector("#read");
const cardsWrapper = document.querySelector(".books");

submitBtn.addEventListener("click", () => addBookToLibrary());

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let newBook = new Book(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputRead.value
  );
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBook();
}

function displayBook() {
  const card = document.createElement("div");
  card.classList.add("book");
  const paraTitle = document.createElement("p");
  paraTitle.classList.add("title");
  const paraAuthor = document.createElement("p");
  paraAuthor.classList.add("author");
  const paraPages = document.createElement("p");
  paraPages.classList.add("page");
  const paraRead = document.createElement("p");
  paraRead.classList.add("read");

  cardsWrapper.appendChild(card);
  card.appendChild(paraTitle);
  card.appendChild(paraAuthor);
  card.appendChild(paraPages);
  card.appendChild(paraRead);

  myLibrary.forEach((book) => {
    paraTitle.textContent = '"' + book.title + '"';
    paraAuthor.textContent = book.author;
    paraPages.textContent = book.pages + " " + "pages";
    paraRead.textContent = book.read;
  });
}
