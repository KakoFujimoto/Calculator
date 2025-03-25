import { Context } from "./buildcommand-context";
import { IButtonCommand } from "./button-command";

/** ボタン押されたコマンドから計算コマンドの生成 */
export class CommandBuilder {
  buildCommand(commands: IButtonCommand[]) {
    const context = new Context();
    commands.forEach(c => c.execute(context));
    return context.getCommands();
  }

  buildDisplayCommand(commands: IButtonCommand[]) {
    const context = new Context();
    commands.forEach(c => c.execute(context));
    return context.getValue();
  }
}
