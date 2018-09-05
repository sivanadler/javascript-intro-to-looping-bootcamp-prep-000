var array = [array, t]
 
function forLoop(array){
  for(var i = 0; i <25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
  }
  return array
}

function whileLoop(number){
  while(number>0){
      console.log(--number);
    }
  if(number===0){
    return ('done');
    }
}

// function doWhileLoop(array){
//   function incrementVariable() {
//     i = i - 1;
//   }
//   do {
//     console.log();
//     incrementVariable(i);
//   } while (i>0);
//   return array
// }

function doWhileLoop(array){
  do {
    array.pop()
  } while (array.length>0 && maybeTrue())
  return array
}