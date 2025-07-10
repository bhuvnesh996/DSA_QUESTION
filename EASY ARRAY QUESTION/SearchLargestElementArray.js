// WAF that returns the largest element in an array  


function findLargestElement(arr) {
    let lagest = arr[0]; // Initialize largest with the first element of the array

    for(let i= 1; i < arr.length; i++) { // Start loop from the second element
        if(arr[i] > lagest) { // Compare current element with largest
            lagest = arr[i]; // Update largest if current element is greater
        }
    }
    return lagest; // Return the largest element found

}

// Example usage
const arr = [5, 9, 10, 36, 44, 66, 77, 88, 99]; // Input array
const result = findLargestElement(arr); // Call the function to find the largest element
console.log(result); // Output the result (expected: 99)
