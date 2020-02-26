const booksDb = [
  {
    id: 1,
    title: "Aprendiendo programación",
    author: 1
  },
  {
    id: 2,
    title: "The pragmantic programmer",
    author: 2
  },
  {
    id: 3,
    title: "Web Development with Node.js",
    author: 3
  }
];

const authorsDb = [
  {
    id: 1,
    title: "Robert Martin"
  },
  {
    id: 2,
    title: "Steve Forest"
  }
];

// function getBookById(id, callback){
//     const book = booksDb.find((book)=>book.id === id);
//     if(!book){
//         const error = new Error();
//         error.message = "Book not found"
//         return callback(error);
//     } else{
//         callback(book);
//     }
// }

// function getAuthorById(id, callback){
//     const author = authorsDb.find((author)=>author.id === id);
//     if(!author){
//         const error = new Error();
//         error.message = "Author not found";
//         return callback(error);
//     } else{
//         callback(author);
//     }
// }

// getAuthorById(2, (err, author) => {
//     if(err){
//         return console.log(err.message);
//     } else{
//         return console.log(author);
//     }
// });

//--------------------------------------------------------------------------------------------------------------------------
// Promesas

/* function getBookById(id) {
  return new Promise((resolve, reject) => {
    const book = booksDb.find(book => book.id === id);
    if (!book) {
      const error = new Error();
      error.message = "Book not found";
      reject(error);
    }
    resolve(book);
  });
}

function getAuthorById(id) {
  return new Promise((resolve, reject) => {
    if (!author) {
      const error = new Error();
      error.message = "Author not found";
      reject(error);
    }
    resolve(author);
  });
}

getBookById(1)
  .then(book => {
    return getAuthorById(book.id);
  })
  .then(author => {
    console.log(author);
  })
  .catch(error => {
    console.log(error.message);
  }); */

//--------------------------------------------------------------------------------------------------------------------------
// Async / Await

async function getBookById(id) {
  const book = booksDb.find(book => book.id === id);
  if (!book) {
    const error = new Error();
    error.message = "Book not found";
    throw error;
  }
  return book;
}

async function getAuthorById(id) {
  if (!author) {
    const error = new Error();
    error.message = "Author not found";
    throw error;
  }
  return author;
}

async function main(){
    try {
        const book = await getBookById(1);
        const author = await getAuthorById(1);
        console.log(`This book ${book.title} was written by ${author.name}`);
        
    } catch (e) {
        console.log(e.message);
    }
}

main();