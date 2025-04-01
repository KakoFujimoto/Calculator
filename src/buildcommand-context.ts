import { Calculator } from "./calculator";
import {
  IOperationCommand,
  NumberCommand,
  PlusCommand,
  MinusCommand,
  MultiplyCommand,
  DivideCommand,
  EqualCommand,
} from "./op-command";

/** コマンド生成時に利用する変数 */
export class Context {
  private value: string = "";
  private commands: IOperationCommand[] = [];
  private lastCommand: IOperationCommand | null = null;

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

  getLatestResult() {
    const calc = new Calculator();
    return calc.execute(this.commands as IOperationCommand[]) ?? 0;
  }

  /** 数値を設定するコマンドを生成する */
  addNumberCommand() {
    if (this.value) {
      this.addCommand(new NumberCommand(parseInt(this.value, 10)));
      this.value = "";
    } else if (this.commands.length > 0) {
      const lastCommand = this.commands[this.commands.length - 1];
      if (lastCommand instanceof EqualCommand) {
        this.addCommand(new NumberCommand(this.getLatestResult()));
      }
    }
  }

  /** 処理コマンドを追加 */
  addCommand(command: IOperationCommand) {
    console.log("addcommand:", command.name());

    // 演算子が連続入力された場合は最終の演算子で置き換える
    if (
      this.isOperatorCommand(this.lastCommand) &&
      this.isOperatorCommand(command)
    ) {
      this.commands[this.commands.length - 1] = command;
    } else {
      this.commands.push(command);
    }

    this.lastCommand = command;
  }

  /** 演算子コマンドかどうかを判定 */
  private isOperatorCommand(command: IOperationCommand | null): boolean {
    return (
      command instanceof PlusCommand ||
      command instanceof MinusCommand ||
      command instanceof MultiplyCommand ||
      command instanceof DivideCommand
    );
  }
}
