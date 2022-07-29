const submitBtn = document.querySelector("#submit");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#page");
const cardsWrapper = document.querySelector(".books");
const addBookBtn = document.querySelector(".addbookbtn");
const modal = document.querySelector(".modal");
const cancelBtn = document.querySelector("#cancel");

submitBtn.addEventListener("click", () => {
  if (
    inputTitle.value !== "" &&
    inputAuthor.value !== "" &&
    inputPages.value !== ""
  ) {
    modal.style.display = "none";
    return addBookToLibrary();
  }
});

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  let newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value);
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBook();

  deleteInputValues();
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

  const bookBtns = document.createElement("div");
  bookBtns.classList.add("bookbtns");

  const readBtn = document.createElement("button");
  readBtn.textContent = "Not read";
  readBtn.classList.add("readbtn");
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("removebtn");

  readBtn.addEventListener("click", () => {
    readBtn.classList.toggle("read");
    if (readBtn.classList.contains("read")) {
      readBtn.textContent = "Read";
    } else readBtn.textContent = "Not read";
  });

  removeBtn.addEventListener("click", () => {
    card.remove();
  });

  cardsWrapper.appendChild(card);
  card.appendChild(paraTitle);
  card.appendChild(paraAuthor);
  card.appendChild(paraPages);
  card.appendChild(bookBtns);
  bookBtns.appendChild(readBtn);
  bookBtns.appendChild(removeBtn);

  myLibrary.forEach((book) => {
    paraTitle.textContent = '"' + book.title + '"';
    paraAuthor.textContent = book.author;
    paraPages.textContent = book.pages + " " + "pages";
  });
}

addBookBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    deleteInputValues();
  }
});

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
  deleteInputValues();
});

function deleteInputValues() {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
}
