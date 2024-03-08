// index.js

// Hàm tính căn bậc 3
function calculateCubeRoot(number) {
  return Math.cbrt(number);
}

// Nhận giá trị từ dòng lệnh
const args = process.argv.slice(2);
const number = parseFloat(args[0]);

// Kiểm tra xem đầu vào có hợp lệ không
if (isNaN(number)) {
  console.log('Vui lòng nhập một số hợp lệ.');
} else {
  // Tính căn bậc 3 và hiển thị kết quả
  const result = calculateCubeRoot(number);
  console.log(`Căn bậc 3 của ${number} là: ${result}`);
}
