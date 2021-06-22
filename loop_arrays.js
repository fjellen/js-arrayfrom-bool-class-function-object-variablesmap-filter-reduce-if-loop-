const myArray = [
    "apple",  // 0
    "pear",   // 1
    "banana"  // 2
  ];
  
  
  myArray.forEach(element => console.log(element));
  
  
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
  
  
  for (const element of myArray) {
    console.log(myArray);
  }