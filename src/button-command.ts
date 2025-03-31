import { Context } from "./buildcommand-context";
import * as Command from "./op-command";

/** ボタン押した時用のコマンド */
export interface IButtonCommand {
  execute(context: Context): void;
}

/** 数値ボタンが押された場合 */
export class NumberButtonCommand implements IButtonCommand {
  constructor(private value: number) {
    if (value < 0 || value > 9) {
      throw "不正な数値";
    }
  }

  execute(context: Context) {
    context.appendValue(this.value);
    context.addNumberCommand();
  }
}

/** 足し算ボタンが押された場合 */
export class PlusButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context) {
    context.addNumberCommand();
    context.addCommand(new Command.PlusCommand());
    // new NumberButtonCommand(0).execute(context);
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

/** 掛け算ボタンが押された場合 */
export class MultiplyButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context): void {
    context.addNumberCommand();
    context.addCommand(new Command.MultiplyCommand());
  }
}

/** 割り算ボタンが押された場合 */
export class DivideButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context): void {
    context.addNumberCommand();
    context.addCommand(new Command.DivideCommand());
  }
}

/** Cボタンが押された場合 */
export class ClearButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context): void {
    context.addCommand(new Command.ClearCommand());
  }
}

/** =ボタンが押された場合 */
export class EqualButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context) {
    context.addNumberCommand();
    context.addCommand(new Command.EqualCommand());
  }
}
