import { IOperationCommand } from './op-command';
import { CommandExecutor } from './command-executor';

/** コマンドを実行して計算する */
export class Calculator {
  /** 計算実行 */
  execute(commands: IOperationCommand[]) {
    const executor = new CommandExecutor();
    for (let i = 0; i < commands.length; ++i) {
      const c = commands[i];
      if(c.isOperator()){
        executor.executeOperation();
      }
      c.execute(executor);
    }

    return executor.result();
  }
}
