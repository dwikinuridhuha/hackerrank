function romanToInt(s: string): number {  
    const romanMap: { [key: string]: number } = {  
        'I': 1,  
        'V': 5,  
        'X': 10,  
        'L': 50,  
        'C': 100,  
        'D': 500,  
        'M': 1000  
    };  

    let total = 0;  
    let prevValue = 0;  

    for (let i = s.length - 1; i >= 0; i--) {  
        const currentValue = romanMap[s[i]];

        if (currentValue < prevValue) {  
            total -= currentValue; // Jika nilai saat ini lebih kecil dari nilai sebelumnya, kurangi  
        } else {  
            total += currentValue; // Jika tidak, tambahkan  
        }  

        prevValue = currentValue; // Perbarui nilai sebelumnya  
    }  

    return total;  
}  

console.log(romanToInt("MMXXV")); // 2000  
console.log(romanToInt("MDCLXVI")); // 1666  
console.log(romanToInt("M")); // 1000  
console.log(romanToInt("CD")); // 400  
console.log(romanToInt("XC")); // 90  
console.log(romanToInt("XL")); // 40  
console.log(romanToInt("I")); // 1  