const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// // 1. DESTRUCTURING

// const book = getBook(3);

// const { title: t, author, genres } = book;

// console.log(t, author, genres);

// const [primary, secondary] = book.genres;
// console.log(primary, secondary);

// // 2.Rest operator and spread oprator

// // rest operator
// const [first, second, ...others] = book.genres;
// console.log(first, second, others);

// // spread operaor

// const newGenres = [...genres, "Epic Fantasy"];
// console.log(newGenres);

// const updatedBook = { ...book, releseDate: "1 April 2024" };

// console.log(updatedBook);

// // we can also overide elements using spread operator

// // 3. Template Literals

// const summary = `Hello This is Nithin, today is ${new Date().toISOString()}`;

// console.log(summary);

// // 4. Ternary Operator

// const pages = 1000;

// pages >= 1000
//   ? console.log("over the thousand")
//   : console.log("Less than Thousand");

// // 5. ARROW FUNCTIONS

// const getYear = (date) => {
//   console.log(date);
// };

// getYear("13-12-2004");

// //6. ShortCurtuing in Logical Operators

// console.log(true && "Hello This is Nithin");

// console.log(false && "hello This is Nithin");

// console.log("Nithin" && 0);

// console.log(true || "Hello");

// console.log(book.translations.spanish || "NOT AVAILABLE");

// // console.log(book.reviews.librarything.reviewsCount || "NO DATA");

// // const count = book.reviews.librarything.reviewsCount ?? "NO DATA";

// // optional Chaining

// function getTotalReviewCount(book) {
//   const goodread = book.reviews.goodreads.reviewsCount;
//   const libraryThing = book.reviews.librarything?.reviewsCount ?? 0;

//   return goodread + libraryThing;
// }

// console.log(getTotalReviewCount(book));

// // MAP FILTER REDUCE

// const books = getBooks();

// const mapBooks = books.map((i) => i);
// console.log(mapBooks);

// const arr = [1, 2, 3, 4, 5].map((i) => i + 1);
// console.log(arr);

// const bookTitles = books.map((book) => book.title);

// console.log(bookTitles);

// const titles = bookTitles.forEach((i) => console.log(i));

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));

// essentialData;

// // filter Method

// const longBooks = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);

// longBooks;

// // reduce method

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.reduce((acc, i) => acc + i, 0);
// console.log(arr2);

// const totalPages = books.reduce((acc, book) => {
//   return book.pages + acc;
// }, 0);

// totalPages;

// // sort Method

// const x = [3, 7, 4, 10, 8, 9];
// const sorted = x.slice().sort((a, b) => a - b);

// sorted;
// x;

// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// console.log(sortedByPages);

// // working with immutable arrays
// // add book object

// const newBook = {
//   id: 6,
//   title: "Success World",
//   author: "Ananymous",
// };

// const booksAfterAdd = [...books, newBook];
// console.log(books.length);
// console.log(booksAfterAdd.length);

// // DELETE BOOK

// const booksDelete = booksAfterAdd.filter((book) => book.id !== 3);

// console.log(booksDelete.length);

// // updateBooks

// const booksAfterUpdate = booksDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1 } : book
// );

// console.log(booksAfterAdd);

// //
// Promises
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// ASYNC AWAIT

async function getToDos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const toDO = getToDos();

console.log(toDO);

console.log("hello");
