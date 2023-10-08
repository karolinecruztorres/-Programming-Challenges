let library = {
  name: "Biblioteca Nacional de Brasilia",
  address: "Setor Cultural da República, Brasília",
  books: []
};

function addBook(type, title, author, publishYear, status) { 
  if (type === "book") {
    let bookOrMagazine = { 
      type: type,
      title: title,
      author: author,
      publishYear: publishYear,
      status: status
    };
    library.books.push(bookOrMagazine);
  }
};

addBook("book", "Het Achterhuis", "Anne Frank", 1947, "avalible");
addBook("book", "Dom Casmurro", "Machado de Assis", 1899, "borrowed");
addBook("book", "The Demon-Haunted World", "Ann Druyan and Carl Sagan", 1995, "avalible");
addBook("book", "Quarto de Despejo", "Carolina Maria de Jesus", 1960, "borrowed");
addBook("magazine", "Raça", "Aroldo Macedo", 2023, "avalible");
// console.log(library);

function lendBook(title) {
  for (let i = 0; i < library.books.length; i++) {
    if (library.books[i].title === title) {
      library.books[i].status = "borrowed";
      
    } 
  }
  console.log(library.books);  
};

// function returnBook() {
//   for (let i = 0; i < library.books.length; i++) {
//     if (library.books[i].status === "avalible") {
//       library.books[i].status = "borrowed";
//     } 
//   }
//   console.log(library.books);  
// };

lendBook("Het Achterhuis");