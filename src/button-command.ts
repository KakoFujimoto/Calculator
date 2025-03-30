import { Context } from "./buildcommand-context";
import * as Command from "./op-command";

/** ボタン押した時コマンド */
export interface IButtonCommand {
  execute(context: Context): void;
}

/** 数値ボタン押された場合 */
export class NumberButtonCommand implements IButtonCommand {
  constructor(private value: number) {
    if (value < 0 || value > 9) {
      throw "不正な数値";
    }
  }

  execute(context: Context) {
    context.appendValue(this.value);
  }
}

/** 足し算ボタン押された場合 */
export class PlusButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context) {
    context.addNumberCommand();
    context.addCommand(new Command.PlusCommand());
    new NumberButtonCommand(0).execute(context); // 計算ボタン押されたら0にする？
  }
}

/** 引き算ボタンが押された場合 */
export class MinusButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context): void {
    context.addNumberCommand();
    context.addCommand(new Command.MinusCommand());
  }
}

/** =が押された */
export class EqualButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context) {
    context.addNumberCommand();
    context.addCommand(new Command.EqualCommand());
  }
}
