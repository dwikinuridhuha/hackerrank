## Descending Order

### Tugas
Buat sebuah fungsi yang menerima sebuah angka non-negatif sebagai argumen dan mengembalikan angka tersebut dengan digit-digitnya diurutkan dalam urutan menurun (descending order).

### Contoh
1. Jika input adalah `42145`, maka output yang diharapkan adalah `54421`.
2. Jika input adalah `145263`, maka output yang diharapkan adalah `654321`.
3. Jika input adalah `123456789`, maka output yang diharapkan adalah `987654321`.

### Langkah-Langkah Penyelesaian
1. **Konversi Angka ke String**: Ubah angka menjadi string untuk bisa mengakses digit-digitnya.
2. **Pisahkan Digit-Digitnya**: Pisahkan string tersebut menjadi array dari karakter-karakter.
3. **Urutkan Array**: Urutkan array tersebut dalam urutan menurun.
4. **Gabungkan Kembali**: Gabungkan array yang sudah diurutkan menjadi sebuah string kembali.
5. **Konversi Kembali ke Angka**: Ubah string hasil penggabungan kembali menjadi angka.

### Implementasi TypeScript
```typescript
function descendingOrder(n: number): number {
    // Ubah angka menjadi string, lalu array karakter, urutkan, gabungkan kembali, dan ubah ke angka
    return parseInt(n.toString().split('').sort((a, b) => b.localeCompare(a)).join(''));
}
```

### Penjelasan Kode
1. **`n.toString()`**: Mengubah angka `n` menjadi string.
2. **`.split('')`**: Memisahkan string menjadi array dari karakter-karakter.
3. **`.sort((a, b) => b.localeCompare(a))`**: Mengurutkan array dengan urutan menurun. `localeCompare` digunakan untuk mengurutkan karakter-karakter string.
4. **`.join('')`**: Menggabungkan array yang sudah diurutkan kembali menjadi sebuah string.
5. **`parseInt(...)`**: Mengubah string hasil penggabungan kembali menjadi angka.

Dengan pendekatan ini, kamu bisa menyusun digit-digit dari sebuah angka dalam urutan menurun seperti yang diminta dalam tantangan tersebut.