let user = {};

// Signup function
function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const operator = document.getElementById('signupOperator').value;

    // Store data
    user = {
        name: name,
        email: email,
        password: password,
        operator: operator
    };

    // Login section
    document.getElementById('signupSection').classList.add('hidden');
    document.getElementById('loginSection').classList.remove('hidden');
}

// Login function
function login() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // match the details
    if (loginEmail === user.email && loginPassword === user.password) {
        
        document.getElementById('welcomeUser').innerText = user.name;
        document.getElementById('operationType').innerText = capitalizeFirstLetter(user.operator);

        // after login show calculator
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('calculatorSection').classList.remove('hidden');
    } else {
        alert("Invalid email or password.");
    }
}

// Capitalize the first letter of the operator type
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Calculate function based on the selected operator
function calculate() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    let result;

    if (user.operator === "addition") {
        result = input1 + input2;
    } else if (user.operator === "subtraction") {
        result = input1 - input2;
    } else if (user.operator === "multiplication") {
        result = input1 * input2;
    }

    document.getElementById('output').value = result;
}