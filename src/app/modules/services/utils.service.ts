export abstract class Utils {

  // Get the second digit of the number
  public static  digitTwo(val: number) {
    return Math.floor((val / 10) % 10);
  }

  // Get the first digit of the number
  public static  digitOne(val: number) {
    return val % 10;
  }

}
