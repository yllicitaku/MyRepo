// Funksioni per ta krijuar nje array me 10 elemente, ne mes 1 dhe 100.

function getRandomArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumbers = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumbers);
    }
    return randomArray;
}
const randomArray = getRandomArray(10, 1, 100);

// Array me 10 numra random.
console.log(randomArray);

// 1) Me gjet mesataren e arrayit

  function average(){
    const sumArray = randomArray.reduce((a, b ) => a + b)
    const averageOfArray = sumArray /randomArray.length;
    console.log(sumArray); // Shuma e elementeve te array
    console.log(averageOfArray); // Mesatarja

  }
  average();


  // 2) Me gjet numrin ma tmadh edhe ma tvogel ne array

      console.log(Math.max(...randomArray));    // Numri me i madh
      console.log(Math.min(...randomArray));    // Numri me i vogel




// 3) Me i rendit sipas madhesis

console.log(randomArray.sort((a,b) => b-a))      // Prej me te madhit
console.log(randomArray.sort((a,b) => a-b))      // Prej me te voglit




// 4) Cdo numer qe eshte mes 5, 30 me e shtu me 1 array tjeter

function numbersBetween(){

    const myBestNumbers = randomArray.filter(number => number >=5 && number <=30);
    console.log(myBestNumbers);

    // Nese nuk dojme qe te jene ne array 5 dhe 30, atehere bejme vetem "number > 5 && number < 30"
}

numbersBetween();

