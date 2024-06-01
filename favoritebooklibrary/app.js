const prompt = require("prompt-sync")();
const dayjs = require("dayjs");
const fs = require("fs");

let books = [];

const showBooks = () => {
  console.clear();

  for (const book of books) {
    console.log(`${book.title} (${book.interest})`);
    console.log(`Rp${book.price}`);
    console.log(book.added + "\n");
  }

  prompt("Press enter to continue..");
};

const addBook = () => {
  console.clear();
  const title = prompt("Insert book title : ");
  const interest = prompt("Insert your interest : ");
  const price = prompt("Insert the price : ");
  const added = dayjs().format("DD/MM/YYYY HH:mm:ss");

  books.push({
    title,
    interest,
    price,
    added,
  });

  console.log(books);
};

const getBooks = () => {
  const data = fs.readFileSync("favorites.json");
  const books = JSON.parse(data);

  return books;
};

const save = () => {
  fs.writeFileSync("favorites.json", JSON.stringify(books));
};

books = getBooks();

let running = true;

while (running) {
  console.clear();
  console.log("Favorite Books Library");
  console.log("1. Show books");
  console.log("2. Add a book");
  console.log("3. Exit");

  const choice = prompt("What do you want to do? : ");

  if (choice == 1) {
    showBooks();
  } else if (choice == 2) {
    addBook();
  } else if (choice == 3) {
    save();
    running = false;
  } else {
    console.log("Menu tidak tersedia");
  }
}

/* expression = kode yang memiliki nilai
statement

const bookName = "Rindu";
const bookInterest = "Alur cerita menarik";
const bookAdded = "17/12/2023";
const bookAuthor = "TereLiye";

const book = {
  name: "Rindu",
  interest: "Alur cerita menarik",
  added: "17/12/2023",
  author: "TereLiye",
};

console.log(book);

const print = (book) => {
  console.log(`Nama Buku: ${book.name}`);
  console.log(`Ketertarikan: ${book.interest}`);
  console.log(`Ditambahkan pada: ${book.added}`);
};

print(book);

const date = new Date().getFullYear();
console.log(date);

console.log(`Judul : ${book.name}`);
console.log(`Ketertarikan : ${book.interest}`);
console.log(`Harga : ${book.price}`);
console.log(`Tanggal : ${book.added}`);

book.name = prompt("Masukkan judul buku: ");
book.interest = prompt("Masukkan ketertarikan: ");
book.price = prompt("Masukkan harga buku: ");
book.added = dayjs().format("DD/MM/YYYY HH:mm:ss");

books.push(book);

console.log(books);
const book = {
  title,
  interest,
  price,
  added,
};

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type" : "text/plain"});
  res.end("Hello, world");
});

server.listen(3000);

*/
