import { Command } from "../base/i-command";
import { CommonOperator } from "./common-operator";

export class EqualCOmmand implements Command {
    private operator :CommonOperator;

    constructor(operator:CommonOperator){
        this.operator = operator;
    }

    execute(): void {
        try {
            const currentExpression = this.operator.getCurrentValue();
            if(!currentExpression) return;

            const result = eval(currentExpression);

            this.operator.setValue(result.toString());
        } catch(error){
            this.operator.setValue("Error");
        }
    }
}