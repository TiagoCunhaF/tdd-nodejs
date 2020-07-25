const isPalindrome = (text) => {
  if (typeof text !== "string") throw new Error("input must be a string");
  if (text === "") throw new Error("empty strings are not palindromes");
  if (text.trim() === "") return false;
  return text === text.split("").reverse().join("");
};

module.exports = { isPalindrome };
