const getPrimeFactors = (factor) => {
  let primeFactors = [];
  for (let divisor = 2; factor > 1; divisor++) {
    for (; factor % divisor === 0; factor /= divisor)
      primeFactors.push(divisor);
  }
  return primeFactors;
};

describe("the getPrimeFactors factors canary spec", () => {
  it("shows the infrastructure works", () => {
    expect(true).toBe(true);
  });
});

describe("a getPrimeFactors factors function should", () => {
  it("return none for 1", () => {
    expect(getPrimeFactors(1)).toMatchObject([]);
  });

  it("return 2 for 2", () => {
    expect(getPrimeFactors(2)).toMatchObject([2]);
  });

  it("return 3 for 3", () => {
    expect(getPrimeFactors(3)).toMatchObject([3]);
  });

  it("return 2, 2 for 4", () => {
    expect(getPrimeFactors(4)).toMatchObject([2, 2]);
  });

  it("return 5 for 5", () => {
    expect(getPrimeFactors(5)).toMatchObject([5]);
  });

  it("return 2, 3 for 6", () => {
    expect(getPrimeFactors(6)).toMatchObject([2, 3]);
  });

  it("return 7 for 7", () => {
    expect(getPrimeFactors(7)).toMatchObject([7]);
  });

  it("return 2, 2, 2 for 8", () => {
    expect(getPrimeFactors(8)).toMatchObject([2, 2, 2]);
  });

  it("return 3, 3 for 9", () => {
    expect(getPrimeFactors(9)).toMatchObject([3, 3]);
  });

  it("return 2, 5 for 10", () => {
    expect(getPrimeFactors(10)).toMatchObject([2, 5]);
  });

  it("return 5, 5 for 25", () => {
    expect(getPrimeFactors(25)).toMatchObject([5, 5]);
  });
});
