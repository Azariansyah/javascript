let x;

x = prompt('Masukkan bilangan genap:');

if (x < 0) {
    alert('Tidak bisa input bilangan negatif');
} else if (x % 2 !== 0) {
    alert('Tidak bisa input bilangan ganjil');
} else {
    let result = Math.sqrt(x);
    alert('Akar pangkat 2 dari ' + x + ' adalah ' + result);
}