import { Context } from "./buildcommand-context";
import * as Command from "./op-command";

/** ボタン押した時用のコマンド */
export interface IButtonCommand {
  execute(context: Context): void;
  isOperator(): boolean;
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
  }

  isOperator(): boolean {
    return false;
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

  isOperator(): boolean {
    return true;
  }
}

/** 引き算ボタンが押された場合 */
export class MinusButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context): void {
    context.addNumberCommand();
    context.addCommand(new Command.MinusCommand());
  }

  isOperator(): boolean {
    return true;
  }
}

/** 掛け算ボタンが押された場合 */
export class MultiplyButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context): void {
    context.addNumberCommand();
    context.addCommand(new Command.MultiplyCommand());
  }

  isOperator(): boolean {
    return true;
  }
}

/** 割り算ボタンが押された場合 */
export class DivideButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context): void {
    context.addNumberCommand();
    context.addCommand(new Command.DivideCommand());
  }

  isOperator(): boolean {
    return true;
  }
}

/** Cボタンが押された場合 */
export class ClearButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context): void {
    context.addCommand(new Command.ClearCommand());
  }

  isOperator(): boolean {
    return false;
  }
}

/** =ボタンが押された場合 */
export class EqualButtonCommand implements IButtonCommand {
  constructor() {}

  execute(context: Context) {
    context.addNumberCommand();
    context.addCommand(new Command.EqualCommand());
  }

  isOperator(): boolean {
    return true;
  }
}
