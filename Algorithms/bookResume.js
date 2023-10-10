const book = {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  pages: 1170,
  publish: 1954,
  reviewer: [
    { name: "John", ratings: { plot: 8, characters: 9, writing: 7 } },
    { name: "Margot", ratings: { plot: 6, characters: 8, writing: 9 } },
    { name: "Carlos", ratings: { plot: 9, characters: 7, writing: 8 } },
  ]
};

function bookResume(parameter) { 
  let review = [];
  let totalPlot = 0;
  let totalCharacters = 0;
  let totalWriting = 0;
  
  for (let i = 0; i < parameter.reviewer.length; i++) {
    review.push(`- ${parameter.reviewer[i].name}: Plot (${parameter.reviewer[i].ratings.plot}), Characters (${parameter.reviewer[i].ratings.characters}), Writing (${parameter.reviewer[i].ratings.writing})\n`);
    totalPlot += parameter.reviewer[i].ratings.plot; 
    totalCharacters += parameter.reviewer[i].ratings.characters; 
    totalWriting += parameter.reviewer[i].ratings.writing; 
  }
  
  const averagePlot = Math.round(totalPlot / parameter.reviewer.length);
  const averageCharacters = Math.round(totalCharacters / parameter.reviewer.length);
  const averageWriting = Math.round(totalWriting / parameter.reviewer.length);
  
  console.log(`The book "${parameter.title}" was written by ${parameter.author}, publish in ${parameter.publish} and has ${parameter.pages} pages. Here are the evaluation from reviewers:
${review.join("")} 
 The average reviewer scores are: 
 - Plot: ${averagePlot}
 - Characters: ${averageCharacters} 
 - Writing: ${averageWriting}`);  
}

bookResume(book); 