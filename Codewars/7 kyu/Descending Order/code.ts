export function descendingOrder(n: number): number {
    // Ubah angka menjadi string, lalu array karakter, urutkan, gabungkan kembali, dan ubah ke angka
    return parseInt(n.toString().split('').sort((a, b) => b.localeCompare(a)).join(''));
}