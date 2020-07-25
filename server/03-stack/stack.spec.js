describe("the stack canary spec", () => {
  it("shows the infrastructure works", () => {
    expect(true).toBe(true);
  });
});

const stackFactory = (capacity) => {
  if (capacity && (typeof capacity !== "number" || capacity <= 0))
    throw new Error("Only is possible to create using positive capacity");

  let empty = true;
  let elements = [];
  return {
    size: () => elements.length,
    isEmpty: () => elements.length === 0,
    pop: () => {
      if (elements.length === 0) throw new Error("Capacity underflow error");
      return elements.pop();
    },
    push: (element) => {
      if (elements.length === capacity)
        throw new Error("Capacity overflow error");
      elements.push(element);
    },
  };
};

describe("a stack", () => {
  beforeEach(() => {
    stack = stackFactory(2);
  });
  it("starts empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it("starts with stack size of 0", () => {
    expect(stack.size()).toBe(0);
  });

  it("is not empty when pushed", () => {
    stack.push();
    expect(stack.isEmpty()).toBe(false);
  });

  it("stack size is 1 when pushed", () => {
    stack.push();
    expect(stack.size()).toBe(1);
  });

  it("stack is empty when pushed and popped", () => {
    stack.push();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it("stack size is 0 when pushed and popped", () => {
    stack.push();
    stack.pop();
    expect(stack.size()).toBe(0);
  });

  it("throws overflow error when pushing to a stack at full capacity", () => {
    stack.push();
    stack.push();
    expect(() => {
      stack.push();
    }).toThrowError("Capacity overflow error");
  });

  it("throw underflow error when popping an empty stack", () => {
    expect(() => {
      stack.pop();
    }).toThrowError("Capacity underflow error");
  });

  it("pops the same one item when pushed", () => {
    stack.push("a");
    expect(stack.pop()).toBe("a");
  });

  it("pops two items with the most recent first", () => {
    stack.push("a");
    stack.push("b");
    expect(stack.pop()).toBe("b");
    expect(stack.pop()).toBe("a");
  });
  it("accepts only a positive capacity", () => {
    expect(() => {
      const stack = stackFactory(-1);
    }).toThrowError("Only is possible to create using positive capacity");
    expect(() => {
      const stack = stackFactory("a");
    }).toThrowError("Only is possible to create using positive capacity");
  });
});
