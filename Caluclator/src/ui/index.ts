import { Calculator } from "../calculator/context";
import { NumberCommand } from "../commands/button/number-command";
import { OperatorCommand } from "../commands/op/operator-command";
import { EqualCommand } from "../commands/op/equal-command";
import { ClearCommand } from "../commands/button/clear-command";

document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display") as HTMLInputElement;
    const calculator = new Calculator(display);

    document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value")!;

            let command;
            if (["+","-","*","/"].includes(value)){
                command = new OperatorCommand(calculator, value);
            } else if (value === "="){
                command = new EqualCommand(calculator);
            } else if (value === "C"){
                command = new ClearCommand(calculator);
            } else {
                command = new NumberCommand(calculator, value);
            }

            command.execute();
        })
    })
})