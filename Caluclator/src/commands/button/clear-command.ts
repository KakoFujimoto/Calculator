import { Command } from "../base/i-command";
import { Calculator } from "../../calculator/context";

export class ClearCommand implements Command {
    private calculator: Calculator;

    constructor(calculator: Calculator){
        this.calculator = calculator;
    }

    execute(): void {
        this.calculator.clear();
    }
}