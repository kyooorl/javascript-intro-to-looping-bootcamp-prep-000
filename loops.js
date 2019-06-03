function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
return array;
}


function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
return 'done';
}


function doWhileLoop(array) {
  function incrementVariable() {
    i = -1;
    i = i + 1;
    return array.push();
  }
  do {
    console.log("I run  once regardless.");
  } while (incrementVariable() < num);
}