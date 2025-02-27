const fullName = 'Do Tuan Hung';
const age = 20;
alert(fullName);
alert(age);
console.log('Day là 1 dong log'); // Xem ở trong Console web
console.log(fullName);
confirm('Xac nhan ban du tuoi');
prompt('Nhap so tuoi');
setTimeout(()=> {
    alert('Thong bao');
}, 2000); // sau 2 giay in ra 'Thong bao'
setInterval(()=>{
    console.log('Thong bao' + Math.random());
}, 2000); // cứ cách 2 giây lại in ra 'Thong bao 123xts'