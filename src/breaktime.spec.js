const breaktime = require("./breaktime");

describe("breaktime", () => {
  it("should log one break after start and end", () => {
    breaktime.start(); // > breaktime start
    breaktime.end(); // > breaktime end
    const log = breaktime.log(); // > breaktime

    expect(log).toBe("You just took a break")

  })
})