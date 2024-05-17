# Apel dan Jeruk - Bahasa Indonesia

Sam tinggal di rumah yang berada di titik `s` pada garis bilangan. Pohon apel ada di titik `a` dan pohon jeruk ada di titik `b`. Anda harus menghitung berapa banyak apel dan jeruk yang jatuh di rumah Sam.

Anda akan diberikan `d` jarak dimana setiap apel jatuh dari pohon apel, dan `d` jarak dimana setiap jeruk jatuh dari pohon jeruk.

## Tujuan Anda:
- Tentukan berapa banyak apel yang jatuh di rumah Sam.
- Tentukan berapa banyak jeruk yang jatuh di rumah Sam.

## Format Input:
1. `s` dan `t` - dua bilangan bulat yang menunjukkan awal dan akhir lokasi rumah Sam.
2. `a` dan `b` - dua bilangan bulat yang menunjukkan lokasi pohon apel dan pohon jeruk.
3. `m` dan `n` - dua bilangan bulat yang menunjukkan jumlah apel dan jeruk.
4. `m` ruang terpisah bilangan bulat - jarak dimana setiap apel jatuh dari pohon apel.
5. `n` ruang terpisah bilangan bulat - jarak dimana setiap jeruk jatuh dari pohon jeruk.

## Format Output:
- Dua baris output:
    - Baris pertama: jumlah apel yang jatuh di rumah Sam.
    - Baris kedua: jumlah jeruk yang jatuh di rumah Sam.

## Contoh Input:
7 11 <br />
5 15 <br />
3 2 <br />
-2 2 1 <br />
5 -6 <br />

## Contoh Output:
1 <br />
1 <br />
## Penjelasan:
- Apel jatuh pada posisi: 3, 6, 7 (total 1 apel jatuh di rumah Sam).
- Jeruk jatuh pada posisi: 20, 9 (total 1 jeruk jatuh di rumah Sam).

Dengan menggunakan contoh ini, Anda dapat menghitung apel dan jeruk yang jatuh di rumah Sam.




## Source Code
```typescript
function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    // Fungsi untuk menghitung berapa banyak buah jatuh di rumah Sam
    const countFruitsInRange = (fruits: number[], treePosition: number): number => {
        return fruits.filter(distance => {
            const fruitPosition = treePosition + distance;
            return fruitPosition >= s && fruitPosition <= t;
        }).length;
    };

    // Hitung jumlah apel yang jatuh di rumah Sam
    const applesInHouse = countFruitsInRange(apples, a);

    // Hitung jumlah jeruk yang jatuh di rumah Sam
    const orangesInHouse = countFruitsInRange(oranges, b);

    // Cetak hasilnya
    console.log(applesInHouse);
    console.log(orangesInHouse);
}
```

## Penjelasan Kode:

### Definisi Fungsi `countApplesAndOranges`:

Fungsi ini menerima beberapa parameter:
- `s` dan `t` yang menandakan rentang rumah Sam.
- `a` dan `b` yang merupakan lokasi pohon apel dan jeruk.
- `apples` dan `oranges` yang merupakan array jarak jatuhnya masing-masing buah dari pohonnya.

### Fungsi `countFruitsInRange`:

Ini adalah fungsi pembantu yang menghitung berapa banyak buah yang jatuh di dalam rentang rumah Sam.
- Menerima parameter:
  - `fruits`: Array jarak jatuhnya buah.
  - `treePosition`: Lokasi pohon buah.
- Fungsi ini melakukan:
  - Menggunakan metode `filter` untuk menyaring buah-buah yang jatuh di dalam rentang rumah Sam (`s` sampai `t`).
  - Menghitung dan mengembalikan jumlah buah yang memenuhi syarat dengan `length`.

### Menghitung Jumlah Apel dan Jeruk yang Jatuh di Rumah Sam:

- `applesInHouse` menggunakan `countFruitsInRange` untuk menghitung jumlah apel yang jatuh di dalam rentang rumah Sam.
- `orangesInHouse` melakukan hal yang sama untuk jeruk.

### Mencetak Hasil:

- Mencetak jumlah apel yang jatuh di dalam rentang rumah Sam.
- Mencetak jumlah jeruk yang jatuh di dalam rentang rumah Sam.

### Contoh Penggunaan Fungsi:

Contoh penggunaan fungsi diberikan dengan nilai-nilai `s`, `t`, `a`, `b`, `apples`, dan `oranges` yang sesuai dengan contoh input dari soal.

Dengan kode ini, Anda dapat menghitung berapa banyak apel dan jeruk yang jatuh di rumah Sam berdasarkan jarak jatuhnya dari pohon masing-masing.
