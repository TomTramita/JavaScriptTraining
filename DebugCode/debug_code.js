    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let multiplyResult = multiply(num1, num2);
                    let additionResult = add(num1, num2);
                    let divisionResult = divide(num1, num2);

                    // Display the results
                    displayMultiplyResult(multiplyResult);
                    displayAdditionResult(additionResult);
                    displayDivisionResult(divisionResult);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a * b;
            }

            function add(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Add the numbers
                return a + b;
            }

            function divide(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Divide the numbers
                // Check for division by zero
                return b === 0 ? 'Error: Division by zero' : a / b;
            }

            function displayMultiplyResult(multiplyResult) {
                // Display the multiplication result in the paragraph element
                const multiplyResultElement = document.getElementById('multiplyResult');
                multiplyResultElement.textContent = `The result of multiplication is: ${multiplyResult}`;
            }

            function displayAdditionResult(additionResult) {
                // Display the addition result in the paragraph element
                const additionResultElement = document.getElementById('additionResult');
                additionResultElement.textContent = `The result of addition is: ${additionResult}`;
            }

            function displayDivisionResult(divisionResult) {
                // Display the division result in the paragraph element
                const divisionResultElement = document.getElementById('divisionResult');
                divisionResultElement.textContent = `The result of division is: ${divisionResult}`;
            }

        