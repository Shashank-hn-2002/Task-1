function findMaximum() {
    const arrayInput = document.getElementById("arrayInput").value;
    const numbers = arrayInput.split(",").map(Number); // Convert input string to array of numbers

    if (numbers.length === 0) {
        document.getElementById("result").textContent = "Please enter at least one number.";
        return;
    }

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    document.getElementById("result").textContent = "Maximum element: " + max;
}