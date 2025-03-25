import { Command } from "../base/command";
import { Calculator } from "../../calculator/context";

export class EqualCommand implements Command {
    private calculator: Calculator; // Calculatorクラスのインスタンスを保持

    constructor(calculator: Calculator) {
        this.calculator = calculator;
    }

    execute(): void {
        try {
            const currentExpression = this.calculator.getCurrentValue();
            if (!currentExpression) return;

            const result = eval(currentExpression);
            this.calculator.setValue(result.toString());
        } catch (error) {
            this.calculator.setValue("Error");
        }
    }
}