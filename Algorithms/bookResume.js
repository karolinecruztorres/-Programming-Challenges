const book = {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  pages: 1170,
  publish: 1954,
  reviewer: [
    { name: "John", rate: 8 },
    { name: "Margot", rate: 6 },
    { name: "Carlos", rate: 9 },
  ]
};

function bookResume(parameter) { 
  let resume = [];
  let soma = 0;
  
  for (let i = 0; i < parameter.reviewer.length; i++) {
    resume.push(` ${parameter.reviewer[i].name} with ${parameter.reviewer[i].rate}`);
    soma += parameter.reviewer[i].rate; 
  }
  
  const average = Math.round(soma / parameter.reviewer.length);
  
  console.log(`The book "${parameter.title}" was written by ${parameter.author} and publish in ${parameter.publish}. It has ${parameter.pages} pages and recived evaluation from reviewers:${resume}. The average reviewer score is ${average}.`);  
}

bookResume(book); 