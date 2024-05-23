function multiplyValues() {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    
    if (isNaN(value1) || isNaN(value2)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }

    const result = value1 * value2;
    document.getElementById('result').innerText = `Result: ${result}`;
}

function resetValues() {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('result').innerText = '';
}
