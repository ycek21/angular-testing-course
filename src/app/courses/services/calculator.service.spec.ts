import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  it("should add two numbers", () => {
    const logger = jasmine.createSpyObj("LoggerService", ["log"]);

    // spyOn(logger, "log");

    const calculatorService = new CalculatorService(logger);

    const result = calculatorService.add(2, 2);

    expect(result).toBe(4);

    expect(logger.log).toHaveBeenCalledTimes(2);
  });

  it("should add subtract numbers", () => {
    const calculatorService = new CalculatorService(new LoggerService());

    const result = calculatorService.subtract(2, 2);

    expect(result).toBe(0, "unexpected subtraction result");
  });
});
