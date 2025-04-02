import { IOperationCommand, NumberCommand, EqualCommand } from "./op-command";
import { CommandExecutor } from "./command-executor";

/** コマンド生成時に利用する変数 */
export class Context {
  private value: string = "";
  private commands: IOperationCommand[] = [];
  private executor: CommandExecutor = new CommandExecutor();

  getCommands() {
    return [...this.commands];
  }

  getValue() {
    return this.value;
  }

  appendValue(v: number) {
    // 先頭の0は削除
    if (this.value === "0") {
      this.value = "";
    }
    this.value += v;
  }

  /** 数値を設定するコマンドを生成する */
  addNumberCommand() {
    if (this.value) {
      this.addCommand(new NumberCommand(parseInt(this.value, 10)));
      this.value = "";
    } else if (this.commands.length > 0) {
      // これは悪くないが最終的になくなるかも？
      const lastCommand = this.commands[this.commands.length - 1];
      if (lastCommand?.isEqualCommand()) {
        this.addCommand(
          new NumberCommand(this.executor.getLatestResult() ?? 0)
        );
      }
    }
  }

  /** 処理コマンドを追加 */
  addCommand(command: IOperationCommand) {
    console.log("addcommand:", command.name());

    // 演算子が連続入力された場合は最終の演算子で置き換える
    if (this.commands.at(-1)?.isOperator() && command.isOperator()) {
      this.commands[this.commands.length - 1] = command;
    } else {
      this.commands.push(command);
    }
  }
}
