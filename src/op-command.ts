import { CommandExecutor } from "./command-executor";

/** 計算処理用 */
export interface IOperationCommand {
  execute(context: CommandExecutor): void;

  /** デバッグ用にわかりやすくするため */
  name(): string;
}

/** 数値を設定するコマンド */
export class NumberCommand implements IOperationCommand {
  constructor(private value: number) {}

  execute(context: CommandExecutor) {
    // 自分の数値をスタックに乗せる
    context.addStack(this.value);
  }

  name() {
    return "NumberCommand(" + this.value + ")";
  }
}

/** 足し算 */
export class PlusCommand implements IOperationCommand {
  execute(context: CommandExecutor): void {
    // 前回設定されている計算を行う
    context.executeOperation();
    // 計算処理を設定
    context.setOperation((lhs, rhs) => lhs + rhs);
  }

  name() {
    return "PlusCommand";
  }
}

/** 引き算 */
export class MinusCommand implements IOperationCommand {
  execute(context: CommandExecutor): void {
    context.executeOperation();
    context.setOperation((lhs, rhs) => lhs - rhs);
  }

  name() {
    return "MinusCommand";
  }
}

/** 掛け算 */
export class MultiplyCommand implements IOperationCommand {
  execute(context: CommandExecutor): void {
    context.executeOperation();
    context.setOperation((lhs, rhs) => lhs * rhs);
  }

  name() {
    return "MultiplyCommand";
  }
}

/** 割り算 */
export class DivideCommand implements IOperationCommand {
  execute(context: CommandExecutor): void {
    try {
      context.executeOperation();
      context.setOperation((lhs, rhs) => {
        if (rhs === 0) {
          throw new Error("Error: DIvision by zero.");
        }
        return lhs / rhs;
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("エラー:", error.message);
      } else {
        console.log("Unknown Error");
      }
    }
  }
  name() {
    return "DivideCommand";
  }
}

/** クリアする */
export class ClearCommand implements IOperationCommand {
  execute(context: CommandExecutor): void {
    context.clear();
  }

  name() {
    return "ClearCommand";
  }
}

/** 計算する */
export class EqualCommand implements IOperationCommand {
  execute(context: CommandExecutor) {
    context.executeOperation();
  }

  name() {
    return "EqualCommand";
  }
}
