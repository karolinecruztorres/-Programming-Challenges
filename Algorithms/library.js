let library = {
  name: "Biblioteca Nacional de Brasilia",
  address: "Setor Cultural da República, Brasília",
  books: [],
  loanHistory:[
    {
      title: " ",
      loanDate: " ",
      returnDate: " "
    }
  ]
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
addBook("book", "Dom Casmurro", "Machado de Assis", 1899, "avalible");
addBook("book", "The Demon-Haunted World", "Ann Druyan and Carl Sagan", 1995, "avalible");
addBook("book", "Quarto de Despejo", "Carolina Maria de Jesus", 1960, "avalible");
addBook("magazine", "Raça", "Aroldo Macedo", 2023, "avalible");

function lendBook(title) {
  for (let i = 0; i < library.books.length; i++) {
    if (library.books[i].title === title) {
      if (library.books[i].status === "avalible") {
        library.books[i].status = "borrowed";
        console.log(library.books[i]);
        return "Book found and status changed to 'borrowed.'";
      } else {
        console.log(library.books[i]);
        return "Book is already on loan.";
      }      
    }
  }
};

function returnBook(title) {
  for (let i = 0; i < library.books.length; i++) {
    if (library.books[i].title === title) {
      if (library.books[i].status === "borrowed") {
        library.books[i].status = "avalible";
        console.log(library.books[i]);
        return "Book found and status changed to 'avalible.'";
      } else {
        console.log(library.books[i]);
        return "Book is already available.";
      }      
    }
  }
};

function listBooks() {
  console.log(library.books);
}

console.log(lendBook("Dom Casmurro"));
console.log(returnBook("Dom Casmurro"));
listBooks();