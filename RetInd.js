function findTwoSum() {
    const numbersInput = document.getElementById("numbers").value;
    const target = parseInt(document.getElementById("target").value);
    const numbersArray = numbersInput.split(",").map(Number);

    const numberMap = new Map();

    for (let i = 0; i < numbersArray.length; i++) {
        const complement = target - numbersArray[i];
        if (numberMap.has(complement)) {
            const index1 = numberMap.get(complement);
            const index2 = i;
            document.getElementById("result").textContent = "Indices of two numbers that add up to the target: [" + index1 + ", " + index2 + "]";
            return;
        }
        numberMap.set(numbersArray[i], i);
    }

    document.getElementById("result").textContent = "No two numbers add up to the target.";
}