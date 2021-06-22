// ======= Map =========
// Map gor om en array till en annan Array.
// array -> annan array
// Arrayen vi far tillbaka ar alltid lika stor som
// arrayen vi korde map pa.

const myArray = [
    "apple",
    "pear",
    "banana"
  ];
  
  const otherArray = myArray.map(function(element){
    if (element === "pear") {
      return 1;
    } else {
      return element;
    }
  });
  
  
  // ======= Filter =========
  // Filter filtrerar en array.
  // Det vill saga, den kan returnera en mindre array an
  // den vi korde filter pa.
  // Du kommer aldrig fa tillbaka en array som ar storre
  // an den du korde filter pa.
  //
  // Funktionen vi ger filter, ska returnera true eller false.
  // Returnerar vi false kommer ett varde forsvinna ur arrayen.
  // Returnerar vi true kommer vardet finnas kvar i arrayen.
  
  const numbers = [
    5, 3, 10, 33, 128,
    55, 1024, 64, 8
  ];
  
  const filteredNumbers = numbers.filter(function(element){
    return element <= 5;
  });
  
  
  // ======= Reduce =========
  // Reduce gor om en array till vad som helst.
  // Dvs, du behover inte fa en array tillbaka.
  // Du kan tex gora om en array till ett objekt.
  
  const otherNumbers = [
    5, 3, 10, 33, 128,
    55, 1024, 64, 8
  ];
  
  // prev = senaste vardet vi returnerade
  // current = nuvarande varde i loopen
  const myObject = otherNumbers.reduce(function(prev, current){
    return prev + current;
  });
  
  console.log(myObject);