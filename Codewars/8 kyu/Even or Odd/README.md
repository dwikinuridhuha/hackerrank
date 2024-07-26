## Deskripsi soal

Untuk menyelesaikan "Even or Odd" (Genap atau Ganjil) pada Codewars menggunakan TypeScript, Anda perlu menulis fungsi yang menentukan apakah suatu angka adalah genap atau ganjil. Berikut adalah solusi contohnya:

```typescript
function even_or_odd(n: number): string {
  return n % 2 === 0 ? "Even" : "Odd";
}
```

```dart
String evenOrOdd(int: number) {
  if(number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
```

Fungsi ini memeriksa apakah angka n habis dibagi 2. Jika ya, fungsi mengembalikan "Genap"; jika tidak, mengembalikan "Ganjil".

Untuk lebih jelasnya dan mencoba latihan ini, kunjungi <a href="https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/typescript">Codewars - Even or Odd.</a>
