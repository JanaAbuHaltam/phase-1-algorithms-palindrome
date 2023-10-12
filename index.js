function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = Array.from(word)
  console.log(wordArray)
  const backwardsArray = wordArray.reverse()
  console.log(backwardsArray)

 for (let i=0; i<wordArray.length;i++){
    let a = wordArray[i]
    let b = backwardsArray[(wordArray.length-1) - i]
    if(a !== b){
      return false
    }
  }

  return true
}

/* 
  Add your pseudocode here
  1- convert string to an array
  2- reverse the array values
  3- loop and compare each item in the array
  4- return true if it is equal 
  5- Otherwise, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
