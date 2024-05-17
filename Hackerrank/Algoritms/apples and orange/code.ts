/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 *
 * Link the question: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
 */

function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    // Write your code here

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
