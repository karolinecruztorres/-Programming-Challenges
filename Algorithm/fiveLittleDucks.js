function fiveLittleDucks(parameter) {
  for (let i = parameter; i >= 1; i--) {
    let ducks = i;
    let lessDucks = i - 1;

    let moreThanTwo = `${ducks} little ducks went swimming one day, 
Over the hills and far away, 
The little duck said, \"Quack, quack, quack, quack\",
And only ${lessDucks} little ducks came back.
`;   
    let onlyTwo = `${ducks} little ducks went swimming one day,
Over the hills and far away,
The little duck said, \"Quack, quack, quack, quack\",
And only ${lessDucks} little duck came back.
`;   
    let lastOne = `${ducks} little duck went swimming one day,
Over the hills and far away,
The little duck said, \"Quack, quack, quack, quack\",
And then no more little ducks came back.

Sad mother duck went out one day,
Over the hills and far away.
Mother duck said \"Quack, quack, quack, quack\",
And all of the ${parameter} little ducks came back.`; 

    if (i > 2) {
      console.log(moreThanTwo);
    } else if (ducks === 2) {
      console.log(onlyTwo);
    } else if (ducks === 1) {
      console.log(lastOne);
    }  
  }  
}

fiveLittleDucks(5);