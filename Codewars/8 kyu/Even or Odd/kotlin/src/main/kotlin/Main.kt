fun evenOrOdd(number: Int): String {
    return if (number % 2 == 0) {
        "Even"
    } else {
        "Odd"
    }
}

fun main(args: Array<String>) {
    // Menguji fungsi
    println(evenOrOdd(1))
    println(evenOrOdd(2))
}