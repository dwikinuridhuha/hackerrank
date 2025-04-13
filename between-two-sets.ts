// Fungsi untuk menghitung FPB (Faktor Persekutuan Terbesar) dua angka
function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Fungsi untuk menghitung KPK (Kelipatan Persekutuan Terkecil) dua angka
function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

// Fungsi utama untuk menghitung jumlah angka di antara dua array
function getTotalX(a: number[], b: number[]): number {
  // 1️ Hitung KPK dari semua angka di array a
  let lcmA = a[0];
  for (let i = 1; i < a.length; i++) {
    lcmA = lcm(lcmA, a[i]);
  }

  // 2️ Hitung FPB dari semua angka di array b
  let gcdB = b[0];
  for (let i = 1; i < b.length; i++) {
    gcdB = gcd(gcdB, b[i]);
  }

  // 3️ Hitung jumlah kelipatan dari lcmA yang bisa membagi gcdB
  let count = 0;
  for (let i = lcmA; i <= gcdB; i += lcmA) {
    if (gcdB % i === 0) {
      count++;
    }
  }

  return count;
}

// Contoh penggunaan:
const a = [2, 4];
const b = [16, 32, 96];
console.log(getTotalX(a, b)); // Output: 3
