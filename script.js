function hitungTotal(arr){
    const total = arr.reduce((acc, curr) => acc + curr, 0);
    return total;
}

const siswa = [
  { nama: "Rafa", nilai: 85 },
  { nama: "Dina", nilai: 72 },
  { nama: "Andi", nilai: 90 }
];

function cariNilaiTertinggi(arr){
    const tertinggi = Math.max(...arr.map(s => s.nilai));
    const namaTertinggi = arr.find(s => s.nilai === tertinggi).nama;
    return namaTertinggi;
}
console.log(hitungTotal([10, 20, 30, 40])); // Output: 100
console.log(cariNilaiTertinggi(siswa)); // Output: 90

function ambildata(){
    setTimeout(() => {
        console.log("Data berhasil diambil");
    }, 2000);
}
ambildata();

const produk = [
  { nama: "Keyboard", harga: 350000, stok: 12 },
  { nama: "Mouse", harga: 120000, stok: 0 },
  { nama: "Monitor", harga: 1250000, stok: 4 },
  { nama: "Headset", harga: 250000, stok: 8 },
  { nama: "Webcam", harga: 600000, stok: 2 }
];

function produkTersedia(arr){
    const filterstok = arr.filter(p => p.stok > 0);
    const urutkanharga = filterstok.sort((a, b) => a.harga - b.harga);
    return urutkanharga;
}
console.log(produkTersedia(produk));

function ubahKalimat(kalimat){
    const ubah = kalimat.split(' ').map(kata => kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase()).join(' ');
    return ubah;
}
console.log(ubahKalimat("hallo dunia, selamat datang di JAVASCRIPT")); // Output: "Hallo Dunia, Selamat Datang Di Javascript"

function isArithmetic(arr){
    const selisih = arr[1] - arr[0];
    for(let i = 2; i < arr.length; i++){
        if(arr[i] - arr[i - 1] !== selisih){
            return false;
        }
    }
    return true;
}
console.log(isArithmetic([2, 4, 6, 8])); // true
console.log(isArithmetic([3, 6, 12, 24])); // false

function hurufTerbanyak(str) {
  str = str.toLowerCase().replace(/\s/g, '');
  const hitung = {};
  
  for (let huruf of str) {
    hitung[huruf] = (hitung[huruf] || 0) + 1;
  }

  let terbanyak = '';
  let jumlahTertinggi = 0;

  for (let huruf in hitung) {
    if (hitung[huruf] > jumlahTertinggi) {
      jumlahTertinggi = hitung[huruf];
      terbanyak = huruf;
    }
  }

  return terbanyak;
}

console.log(hurufTerbanyak("Saya suka JavaScript"));

function hurufTerbanyak(str) {
  str = str.toLowerCase().replace(/\s/g, '');
  const hitung = {};

  for (let huruf of str) {
    console.log("Huruf sekarang:", huruf);
    console.log("Sebelum update:", hitung[huruf]); // akan tampil undefined dulu
    hitung[huruf] = (hitung[huruf] || 0) + 1;
    console.log("Sesudah update:", hitung[huruf]);
    console.log("Isi object hitung sekarang:", hitung);
    console.log("-------------------------");
  }
}

hurufTerbanyak("saya");