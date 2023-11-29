/* 
let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve();
  }, 1000);
});

myPromise
  .then(function() {
    return 99;
  })
  .then(function(number) {
    console.log(number);
  });
*/

const randomNumberPromise = new Promise(function(resolve, reject){
  // AFter One Second, Call Math Random
  setTimeout(()=>{
    const randomVal = Math.random();
    // If random Value is less than .5, Resolve, else Reject
    if (randomVal > 0.5){
      resolve(randomVal);
    } else {
      reject(randomVal);
    }
  }, 1000)
});

randomNumberPromise.then((value)=>{
  console.log('Success:', value);
}).catch((value)=> {console.log('Failure', value)});