import { Command } from "../base/command";
import { Calculator } from "../../calculator/context";

export class OperatorCommand implements Command {
    private calculator : Calculator;
    private operator :string;

    constructor(calculator: Calculator, operator:string){
        this.calculator = calculator;
        this.operator = operator;
    }

    execute(): void {
        let currentValue = this.calculator.getCurrentValue();
        const lastchar = currentValue.slice(-1);

        if(["+","-","*","/"].includes(lastchar)){
            this.calculator.setValue(currentValue.slice(0,-1) + this.operator);
        } else {
            this.calculator.appendValue(this.operator);
        }

        this.calculator.setOperatorPressed(true);
    }
}