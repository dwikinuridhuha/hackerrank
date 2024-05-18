## Deskripsi Soal
Ada dua kanguru yang berada di garis satu dimensi. Kanguru pertama memulai dari posisi \( x_1 \) dengan kecepatan lompatan \( v_1 \) meter per lompatan. Kanguru kedua memulai dari posisi \( x_2 \) dengan kecepatan lompatan \( v_2 \) meter per lompatan. Anda harus menentukan apakah kedua kanguru akan berada di posisi yang sama pada saat yang sama, dan jika ya, kapan.

## Input Format
Satu baris yang berisi empat bilangan bulat terpisah: \( x_1 \), \( v_1 \), \( x_2 \), \( v_2 \)
- \( x_1 \): Posisi awal kanguru pertama
- \( v_1 \): Kecepatan lompatan kanguru pertama
- \( x_2 \): Posisi awal kanguru kedua
- \( v_2 \): Kecepatan lompatan kanguru kedua

## Output Format
Cetak "YES" jika kedua kanguru akan bertemu pada posisi yang sama pada saat yang sama.
Cetak "NO" jika tidak.

## Analisis
Untuk mengetahui apakah kedua kanguru akan bertemu, kita perlu menganalisis posisi mereka seiring waktu.

- Posisi kanguru pertama setelah \( n \) lompatan: \( x_1 + n \cdot v_1 \)
- Posisi kanguru kedua setelah \( n \) lompatan: \( x_2 + n \cdot v_2 \)

Kedua kanguru akan bertemu jika posisi mereka sama pada suatu waktu \( n \):

\[ x_1 + n \cdot v_1 = x_2 + n \cdot v_2 \]

Jika kita selesaikan untuk \( n \), kita dapatkan:

\[ n \cdot v_1 - n \cdot v_2 = x_2 - x_1 \]
\[ n \cdot (v_1 - v_2) = x_2 - x_1 \]
\[ n = \frac{x_2 - x_1}{v_1 - v_2} \]

Untuk \( n \) menjadi bilangan bulat positif, harus dipenuhi dua syarat:
1. \( x_2 - x_1 \) harus habis dibagi \( v_1 - v_2 \).
2. \( n \) harus bernilai positif, yaitu \( \frac{x_2 - x_1}{v_1 - v_2} > 0 \).

## Kasus Khusus
1. Jika \( v_1 = v_2 \):
    - Jika \( x_1 \neq x_2 \), maka mereka tidak akan pernah bertemu (output "NO").
    - Jika \( x_1 = x_2 \), maka mereka sudah berada di posisi yang sama (output "YES").

## Algoritma
1. Jika \( v_1 = v_2 \):
    - Jika \( x_1 = x_2 \), cetak "YES".
    - Jika tidak, cetak "NO".
2. Jika \( v_1 \neq v_2 \):
    - Hitung \( \frac{x_2 - x_1}{v_1 - v_2} \).
    - Jika hasilnya bilangan bulat positif, cetak "YES".
    - Jika tidak, cetak "NO".

## Contoh

**Input 1:** 0 3 4 2

**Output 1:** YES


Penjelasan:
\[ n = \frac{4 - 0}{3 - 2} = 4 \]
\( n \) adalah bilangan bulat positif, jadi jawabannya "YES".

**Input 2:** 0 2 5 3

**Output 2:** NO

Penjelasan:
\[ n = \frac{5 - 0}{2 - 3} = -5 \]
\( n \) bukan bilangan bulat positif, jadi jawabannya "NO".

# Source Code

## Implementasi dalam TypeScript

```typescript
function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    if (v1 === v2) {
        if (x1 === x2) {
            return "YES";
        } else {
            return "NO";
        }
    } else {
        const n = (x2 - x1) / (v1 - v2);
        if (Number.isInteger(n) && n >= 0) {
            return "YES";
        } else {
            return "NO";
        }
    }
}

// Contoh penggunaan
console.log(kangaroo(0, 3, 4, 2));  // Output: YES
console.log(kangaroo(0, 2, 5, 3));  // Output: NO
```
## Penjelasan Kode

### Deklarasi Fungsi:
- Fungsi `kangaroo` menerima empat parameter: `x1`, `v1`, `x2`, dan `v2` yang semuanya bertipe `number`.

### Kasus Kecepatan Sama (`v1 === v2`):
- Jika kecepatan kedua kanguru sama, maka kita periksa apakah posisi awal mereka sama (`x1 === x2`).
    - Jika posisi awal sama, cetak "YES".
    - Jika posisi awal berbeda, cetak "NO".

### Kasus Kecepatan Berbeda:
- Hitung nilai `n` menggunakan rumus `n = (x2 - x1) / (v1 - v2)`.
- Gunakan `Number.isInteger(n)` untuk memeriksa apakah `n` adalah bilangan bulat.
- Periksa apakah `n` lebih besar atau sama dengan nol (`n >= 0`).
    - Jika `n` bilangan bulat dan `n` lebih besar atau sama dengan nol, cetak "YES".
    - Jika tidak, cetak "NO".

### Contoh Penggunaan:
- `console.log(kangaroo(0, 3, 4, 2));` mencetak `"YES"` karena kedua kanguru akan bertemu setelah 4 lompatan.
- `console.log(kangaroo(0, 2, 5, 3));` mencetak `"NO"` karena kedua kanguru tidak akan pernah bertemu.

Kode di atas mencakup logika yang diperlukan untuk memecahkan masalah dan mengembalikan hasil yang sesuai berdasarkan input yang diberikan.

