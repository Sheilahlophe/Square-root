// Function to calculate the square root
function calculateSquareRoot(number) {
    if (number < 0) {
        throw new Error("Cannot calculate square root of a negative number.");
    }
    return Math.sqrt(number);
}

// Function to test the square root calculation with error handling
function testSquareRootCalculation(inputNumber) {
    try {
        const result = calculateSquareRoot(inputNumber);
        console.log(`The square root of ${inputNumber} is ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// Test the function with a positive number
testSquareRootCalculation(16);

// Test the function with a negative number
testSquareRootCalculation(4);
