import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe("CalculatorService", () => {
  let calculatorService: CalculatorService;
  let logger: LoggerService;

  beforeEach(() => {
    logger = jasmine.createSpyObj("LoggerService", ["log"]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: logger },
      ],
    });

    calculatorService = TestBed.inject(CalculatorService);
  });

  it("should add two numbers", () => {
    const result = calculatorService.add(2, 2);

    expect(result).toBe(4);

    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it("should add subtract numbers", () => {
    const result = calculatorService.subtract(2, 2);

    expect(result).toBe(0, "unexpected subtraction result");

    expect(logger.log).toHaveBeenCalledTimes(1);
  });
});
