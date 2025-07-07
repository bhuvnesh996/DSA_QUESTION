// WAF (Write A Function) that returns the number of negative numbers in an array
function countNegativeNumbers(arr) {
    let count = 0; // Initialize counter to track negative numbers

    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is negative
        if (arr[i] < 0) {
            count++; // Increment count for each negative number
        }
    }

    return count; // Return the total count of negative numbers
}

// Example usage
let arr = [2, -9, 17, 0, 1, -10, -5, 3, -4, 6]; // Example array containing both negative and non-negative numbers
let result = countNegativeNumbers(arr); // Call the function and store the result

console.log(result); // Output: 4 (there are four negative numbers)

/*
Time Complexity:
- O(n) → we visit each element of the array exactly once
  where n is the number of elements in the array

Space Complexity:
- O(1) → uses constant extra space (only one variable 'count')
*/