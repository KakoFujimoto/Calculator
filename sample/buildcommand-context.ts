import { IOperationCommand, NumberCommand } from "./op-command";

/** コマンド生成時に利用する変数 */
export class Context {
  private value: string = '';

  private commands: IOperationCommand[] = [];

  getCommands() { return [...this.commands]; }

  getValue() { return this.value; }

  appendValue(v: number) {
    // 先頭の0は削除
    if (this.value === '0') { this.value = ''; }
    this.value += v;
  }

  /** 数値を設定するコマンドを生成する */
  addNumberCommand() {
    if (this.value) {
      this.addCommand(new NumberCommand(parseInt(this.value, 10)));
      this.value = '';
    }
  }

  /** 処理コマンドを */
  addCommand(command: IOperationCommand) {
    console.log('addcommand:' + command.name());
    this.commands.push(command);
  }
}
