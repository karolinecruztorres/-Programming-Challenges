const book = {
  title: "The Lord of Rings",
  author: "J.R.R. Tolkien",
  pages: 1170,
  publish: 1954,
};

function bookResume(parameter) { 
  console.log(`The book "${parameter.title}" was written by ${parameter.author} and publish in ${parameter.publish}. It has ${parameter.pages} pages.`);  
}

bookResume(book); 