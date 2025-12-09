// Tỷ giá hối đoái cố định (ví dụ)
const exchangeRates = {
    USD: {
        VND: 25000,
        EUR: 0.92,
        USD: 1
    },
    VND: {
        USD: 1 / 25000,
        EUR: 1 / 27000, // Ví dụ
        VND: 1
    },
    EUR: {
        USD: 1.08,
        VND: 27000, // Ví dụ
        EUR: 1
    }
};

function convertCurrency() {
    // Lấy giá trị từ các input của người dùng
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    // Kiểm tra đầu vào hợp lệ
    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Vui lòng nhập số tiền hợp lệ.';
        return;
    }

    // Thực hiện tính toán
    let convertedAmount;
    try {
        // Tỷ giá từ loại tiền gốc sang loại tiền đích
        const rate = exchangeRates[fromCurrency][toCurrency];
        if (rate) {
            convertedAmount = amount * rate;
            // Làm tròn kết quả đến 2 chữ số thập phân nếu cần
            convertedAmount = convertedAmount.toFixed(2);

            resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            resultDiv.textContent = 'Không tìm thấy tỷ giá hối đoái cho cặp tiền tệ này.';
        }
    } catch (error) {
        resultDiv.textContent = 'Đã xảy ra lỗi khi tính toán. Vui lòng kiểm tra lại cặp tiền tệ.';
    }
}
