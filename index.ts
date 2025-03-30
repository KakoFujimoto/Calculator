import * as Button from "./src/button-command";
import { Context } from "./src/buildcommand-context";

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
        // 数値ボタンの場合、数値を渡す
        command = new Button.NumberButtonCommand(Number(value));
        break;
    }

    // コマンド実行
    command.execute(context);
  });
});
