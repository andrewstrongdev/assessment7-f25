// 1) Sum Zero

const addToZero = (nums) => {
    let result = false;
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){

            if(nums[i] + nums[j] === 0){
                result = true;
            }

        }
    }
    console.log(result)
}
addToZero([1, -1]);
// runtime O(n^2) - quadratic time




// 2)Unique Characters
const hasUniqueChars = (word) => {
    
        let newWord = "";
         
        for(let i = 0; i < word.length; i++){
        
          if(newWord.includes(word[i]) === false){
           
            newWord += word[i]
          }
        }
        if(newWord.length === word.length){

            return true
        } return false
}
console.log(hasUniqueChars("Moonday"))
//runtime O(n) - linear time




// 3) Pangram Sentence
const isPangram = (str) => {
    let alphaStr = "abcdefghijklmnopqrstuvwxyz"
    let newAlpha = '';
    let newStr = str.toLowerCase()

    for(let i = 0; i < alphaStr.length; i++){
        
        if(newStr.includes(alphaStr[i])){

            newAlpha += alphaStr[i]
        }
      }
      if (newAlpha.length === alphaStr.length){
        return true
      } return false
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("The quick brown fox jumps!"))
//runtime O(n) -linear time



// 4) Longest Word
const findLongestWord = (arr) => {
    let num = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > num){
            num = arr[i].length;
    }
}
return num
}
console.log(findLongestWord(["hi", "hello","asdfgh"]))
//runtime O(n) - linear time
