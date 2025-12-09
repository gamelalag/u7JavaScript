// Hàm chuyển C sang F (đã viết ở trên)
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Hàm chuyển F sang C (đã viết ở trên)
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Hàm xử lý khi người dùng nhấn nút "C sang F"
function doiTuC_sang_F() {
    const inputElement = document.getElementById('temperatureInput');
    const resultElement = document.getElementById('result');
    const celsius = parseFloat(inputElement.value);

    if (isNaN(celsius)) {
        resultElement.textContent = "Vui lòng nhập một số hợp lệ.";
        resultElement.style.color = "red";
        return;
    }

    const fahrenheit = celsiusToFahrenheit(celsius);
    resultElement.textContent = `${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    resultElement.style.color = "blue";
}

// Hàm xử lý khi người dùng nhấn nút "F sang C"
function doiTuF_sang_C() {
    const inputElement = document.getElementById('temperatureInput');
    const resultElement = document.getElementById('result');
    const fahrenheit = parseFloat(inputElement.value);

    if (isNaN(fahrenheit)) {
        resultElement.textContent = "Vui lòng nhập một số hợp lệ.";
        resultElement.style.color = "red";
        return;
    }

    const celsius = fahrenheitToCelsius(fahrenheit);
    resultElement.textContent = `${fahrenheit.toFixed(2)}°F = ${celsius.toFixed(2)}°C`;
    resultElement.style.color = "blue";
}
