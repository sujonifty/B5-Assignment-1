function formatString(input: string, toUpper?: boolean): string{
    if (toUpper === false) {
        return input.toLowerCase();
      } else {
        return input.toUpperCase();
      }
}
const a =formatString("Hello");          // Output: "HELLO"
const b =formatString("Hello", true);   // Output: "HELLO"
const c =formatString("Hello", false);
console.log(a);