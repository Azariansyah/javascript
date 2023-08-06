// Import readline-sync
const readline = require('readline-sync');

// Dapatkan input
let x = readline.question('Masukkan bilangan genap: ');

// Lakukan pengecekan bilangan 
if (x < 0) {
    console.log("Tidak bisa input bilangan negatif");
}
else if (x % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
}
else {
    // Hitung akar pangkat 2
    let result = Math.sqrt(x);

    // Tampilkan hasil
    console.log("Akar pangkat 2 dari " + x + " adalah " + result);
}