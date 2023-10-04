function hasTargetSum(array, target) {
  // Write your algorithm here
  const iterated = new Set();

  for (const element of array) {
    let diff = target - element;
    if (iterated.has(diff)) 
      return true;

      iterated.add(element)
  }
      return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity = 0(n)
*/

/* 
  Add your pseudocode here
  Function hasTargetSum(array, target)
    Create an empty set called "iterated"
    
    For each "element" in "array" do
        Calculate "diff" as (target - element)
        
        If "diff" is in the "iterated" set then
            Return true 
            
        Add "element" to the "iterated" set
        
    End For
    
    Return false
End Function
*/

/*
  Add written explanation of your solution here
- Inside the function, it creates an empty set called iterated to keep track of the numbers that have been seen while iterating through the array.

- It then enters a for...of loop to iterate through each element of the array.

- For each element, it calculates the difference (diff) between the target and the current element. This difference represents the value needed to reach the target when added to the current element.

- It checks if the iterated set already contains this difference (diff) using the iterated.has(diff) method. If it does, it means there is a pair of numbers in the array that adds up to the target, so the function returns true.

- If the difference (diff) is not found in the set, it means the current element has not been paired with any previous element to reach the target, so it adds the current element to the iterated set using iterated.add(element).

- After iterating through the entire array and not finding a pair that adds up to the target, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
