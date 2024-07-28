public class Main {
    public static String evenOrOdd(int number) {
        if (number % 2 == 0) {
            return "Even";
        } else {
            return "Odd";
        }
    }

    public static void main(String[] args) {
        // Menguji fungsi
        System.out.println(evenOrOdd(1));
        System.out.println(evenOrOdd(2));
    }
}