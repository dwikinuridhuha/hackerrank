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
