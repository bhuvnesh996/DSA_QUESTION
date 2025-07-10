// WAF that return the Second largest element in a arry 
function findSecondLargestElement(arr) {
    if (arr.length < 2){
        return "null";
    }
    let largest = -Infinity; // Initialize least with the  -Infinity
    let second = -Infinity; // Initialize least with the  -Infinity
    for (let i = 0; i < arr.length; i++) { // Start loop from the first element
        if (arr[i] > largest) { // Compare current element with largest element
            second = largest;  //  Update second lagest element in arry
            largest = arr[i]; // Update least if current element is lagest
        } else if (arr[i] > second && arr[i]!=largest) { // condition if  current element  is smaller than                              
            second = arr[i];  //     Update value for it  
        }
    }
    return second; // Return the second element found
}

// Example usage
const arr = [5, 9, 10, -36, 44, 66, 77, 88, 99]; // Input array
const result = findSecondLargestElement(arr); // Call the function to find the second lagest                                                                     element
console.log("result", result); // Output the result (expected: 88)