const library = {
  name: "Biblioteca Nacional de Brasilia",
  address: "Setor Cultural da República, Brasília",
  books: [],
  loanHistory:[]
};

function addBook(type, title, author, publishYear, status) { 
  if (type === "book") {
    const bookOrMagazine = { 
      type: type,
      title: title,
      author: author,
      publishYear: publishYear,
      status: status
    };
    library.books.push(bookOrMagazine);
  }
};

addBook("book", "Het Achterhuis", "Anne Frank", 1947, "available");
addBook("book", "Dom Casmurro", "Machado de Assis", 1899, "available");
addBook("book", "The Demon-Haunted World", "Ann Druyan and Carl Sagan", 1995, "available");
addBook("book", "Quarto de Despejo", "Carolina Maria de Jesus", 1960, "available");
addBook("magazine", "Raça", "Aroldo Macedo", 2023, "available");

function lendBook(title) {
  for (let i = 0; i < library.books.length; i++) {
    if (library.books[i].title === title) {
      if (library.books[i].status === "available") {
        library.books[i].status = "borrowed";

        library.loanHistory.push({
          title: title,
          loanDate: new Date().toLocaleDateString(),
          returnDate: null
        });

        return "Book found and status changed to 'borrowed'.";
      } else {
        return "Book is already on loan.";
      }      
    }
  }
};

function returnBook(title) {
  for (let i = 0; i < library.books.length; i++) {
    if (library.books[i].title === title) {
      if (library.books[i].status === "borrowed") {
        library.books[i].status = "available";
        bookHistory(title);

        return "Book found and status changed to 'available'.";
      } else {
        return "Book is already available.";
      }      
    }
  }
};

function bookHistory(title) {
  for (let i = 0; i < library.loanHistory.length; i++) {
    if (library.loanHistory[i].title === title && library.loanHistory[i].returnDate === null) {
      const currentDate = new Date();
      const futureDate = new Date(currentDate.getTime() + 10 * 24 * 60 * 60 * 1000);
      const formattedDate = futureDate.toLocaleDateString();

      library.loanHistory[i].returnDate = formattedDate;    
    }
  }
  console.log(library.loanHistory);
};

function listBooks() {
  console.log(library);
};

console.log(lendBook("Dom Casmurro"));
console.log(lendBook("Quarto de Despejo"));
console.log(lendBook("The Demon-Haunted World"));
console.log(returnBook("Dom Casmurro"));
listBooks();