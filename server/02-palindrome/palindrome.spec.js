const { isPalindrome } = require("./palindrome");
describe("the palindrome canary spec", () => {
  it("shows the infrastructure works", () => {
    expect(true).toBe(true);
  });
  it("true for mom", () => {
    expect(isPalindrome("mom")).toBe(true);
  });

  it("false for dude", () => {
    expect(isPalindrome("dude")).toBe(false);
  });
  it("true for mom mom", () => {
    expect(isPalindrome("mom mom")).toBe(true);
  });
  it("false for dad mom", () => {
    expect(isPalindrome("dad mon")).toBe(false);
  });
  it("false for whitespace", () => {
    expect(isPalindrome(" ")).toBe(false);
  });
  it("error for empty string", () => {
    expect(() => {
      isPalindrome("");
    }).toThrowError("empty strings are not palindromes");
  });
  it("error for not a string", () => {
    expect(() => {
      isPalindrome(121);
    }).toThrowError("input must be a string");
  });
});
