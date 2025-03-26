import { Command } from "../base/i-command";
import { Calculator } from "../../calculator/context";

export class NumberCommand implements Command {
    private calculator:Calculator;
    private value:string;

    constructor(calculator: Calculator, value:string){
        this.calculator = calculator;
        this.value = value;
    }

    execute(): void {
        let currentValue = this.calculator.getCurrentValue();
        if (currentValue === "0"){
            this.calculator.setValue(this.value);
        } else {
            this.calculator.appendValue(this.value)
        }
        this.calculator.setOperatorPressed(false);
    }
}