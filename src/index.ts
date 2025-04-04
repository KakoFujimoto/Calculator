import * as Button from "./button-command";
import { Context } from "./buildcommand-context";
import { Calculator } from "./calculator";

const context = new Context();

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value")!;
    let command: Button.IButtonCommand;

    switch (value) {
      case "+":
        command = new Button.PlusButtonCommand();
        break;
      case "-":
        command = new Button.MinusButtonCommand();
        break;
      case "*":
        command = new Button.MultiplyButtonCommand();
        break;
      case "/":
        command = new Button.DivideButtonCommand();
        break;
      case "=":
        command = new Button.EqualButtonCommand();
        break;
      case "C":
        command = new Button.ClearButtonCommand();
        break;
      default:
        command = new Button.NumberButtonCommand(Number(value));
        break;
    }

    command.execute(context);

    const display = document.querySelector(".display") as HTMLInputElement;

    const calc = new Calculator();
    const result = calc.execute(context.getCommands());

    if (value === "C") {
      display.value = "0";
    } else if (command.isOperator() === false) {
      display.value = context.getValue();
    } else if (result !== undefined) {
      display.value = result.toString();
    } else {
      display.value = "0";
    }
  });
});
