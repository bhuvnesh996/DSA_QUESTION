// Function to search for an element in an array
// Returns the index of the target if found, else returns -1
function search(arr, target) {
    // Loop through each element in the array
    for (let i = 0; i <= arr.length - 1; i++) {
        // Check if current element is equal to target
        if (arr[i] === target) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if element is not found in the array
}

// Example usage:
const arr = [5, 9, 10, 36, 44, 66, 77, 88, 99];  // Input array
const target = 10;  // Element to search
const result = search(arr, target);  // Call the search function

console.log(result);  // Output the result (expected: 2)

/*
Time Complexity:
- Best Case: O(1) → if the element is at the start of the array
- Worst Case: O(n) → if the element is at the end or not present
  where n is the number of elements in the array

Space Complexity:
- O(1) → uses constant extra space (no additional data structures)
*/