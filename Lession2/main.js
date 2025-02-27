/**
 1. Toán tử số học
 2. Toán tử gán
 3. Toán tử so sánh
 4. Toán tử logic
 */
let a = 1 + 2; // Toán tử số học
console.log(a); 
let fullName = 'Do Tuan HUNG'; // Toán tử gán
let c = 1;
let b = 2;
if ( b > c) { // Toán tử so sánh
    alert('YES')
}
let e = 1;
let g = 2;
if(e > 0 && g > 0) { // Toán tử logic
    alert('e va g lon hon 0');
}
let f = b + c;
let h = b ** c; // b ^ c;
let l = b % c; // chia lấy dư
l++;
h++;
l--;
h--;
console.log(f);

// Perfix & Postfix - Tiền tố & Hậu tố
let k = 6;

k++; // => 7
k--; // => 6
++k; // => 7
--k; // => 6
console.log(k)

// Tiền tố console.log(++a);
// Việc 1: + 1 cho a, a = a + 1 => a = 7
// viec 2: Trả về a sau khi + 1
console.log(++a);

// Hậu tố console.log(a++);
// Viêc 1: 'a copy' , 'a copy' = 6
// Việc 2: cộng 1 của a, a = a - 1 => a = 7
// Việc 3: Trả về biến 'a copy'
console.log(a++); // => 6;
console.log(a); // => 7;

let number = 6;
let output = number++ + --number;
// Viêc 1: Gọi number (number thời điểm 1)
// Việc 2: number = number + 1
// Việc 3: number = number - 1; (number thời điểm 2)
// Việc 4: output = number thời điểm 1 + number thời điểm 2
// Hay ouput = 6 + --(6+1) = 6 + ( 6 + 1 ) - 1 = 12
console.log(output); // => 12
let number1 = 6;
let ouput1 = ++number1* 2 - number1--*2;
console.log(ouput1)