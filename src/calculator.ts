import { IOperationCommand } from './op-command';
import { CommandExecutor } from './command-executor';
import { Context } from './buildcommand-context';

/** コマンドを実行して計算する */
export class Calculator {
  /** 計算実行 */
  execute(commands: IOperationCommand[]) {
    const context = new Context();
    const executor = new CommandExecutor(context);
    for (let i = 0; i < commands.length; ++i) {
      const c = commands[i];
      c.execute(executor);
    }

    return executor.result();
  }
}
