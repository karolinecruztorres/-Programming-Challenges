function displayCurrentDateTime() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const time = currentDate.toLocaleTimeString();
  console.log(currentDate);
  console.log(`Today is ${dayOfWeek}`);
  console.log(`Current time is ${time}`);
}

 displayCurrentDateTime();