import * as Button from "./button-command";
import { Context } from "./buildcommand-context";
import { Calculator } from "./calculator";
import { CommandBuilder } from "./command-builder";

const context = new Context();

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value")!;

    console.log("クリックされたボタンの値:", value);

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

    /** コマンドを追加 */
    command.execute(context);

    /** 結果を取得して表示を更新 */
    const display = document.querySelector(".display") as HTMLInputElement;

    // 計算結果を表示するために、builderのbuildDisplayCommandを使う
    const uicommands: Button.IButtonCommand[] = [command];
    const builder = new CommandBuilder();
    const result = builder.buildDisplayCommand(uicommands);  // ここで結果を取得

    // 計算結果をディスプレイに反映
    if (result !== undefined && display) {
      display.value = result.toString();
    } else {
      if (display) {
        display.value = "0";
      }
    }
  });
});
