// link => https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/typescript
String evenOrOdd(int number) {
  if(number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

void main() {
  print(evenOrOdd(1));
  print(evenOrOdd(2));
}