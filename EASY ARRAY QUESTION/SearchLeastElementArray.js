// WAF that return the Least element in a arry    

function findLeastElement(arr) {
    let least = arr[0]; // Initialize least with the first element of the array

    for (let i = 1; i < arr.length; i++) { // Start loop from the second element
        if (arr[i] < least) { // Compare current element with least
            least = arr[i]; // Update least if current element is smaller
        }
    }
    return least; // Return the least element found
}

// Example usage
const arr = [5, 9, 10, 36, 44, 66, 77, 88, 99]; // Input array
const result = findLeastElement(arr); // Call the function to find the least element    
console.log(result); // Output the result (expected: 5)