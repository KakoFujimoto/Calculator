import * as Button from "./src/button-command";
import { Context } from "./src/buildcommand-context";
import { Calculator } from "./src/calculator";
import { CommandBuilder } from "./src/command-builder";

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

    /**  結果を取得して表示を更新 */
    const display = document.querySelector(".display") as HTMLInputElement;
    const uicommands: Button.IButtonCommand[] = [command];
    const builder = new CommandBuilder();
    const opcommands = builder.buildCommand(uicommands);
    const calc = new Calculator();
    const result = calc.execute(opcommands);

    if (result !== undefined && display) {
      display.value = result.toString();
    } else {
      if (display) {
        display.value = "0";
      }
    }
  });
});
