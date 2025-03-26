import { Command } from "../base/i-command";
import { CommonOperator } from "./common-operator";

export class DevideCommand implements Command{
    private operator : CommonOperator;

    constructor(operator:CommonOperator){
        this.operator = operator;
    }

    execute(): void {
        this.operator.applyOperator("/");
    }
}