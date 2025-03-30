export class CommandExecutor {
  /** 次にする計算 */
  private operation: ((lhs: number, rhs: number) => number) | null = null;
  /** 計算に渡す数値 */
  private stack: number[] = [];

  /** 設定されている計算処理を行う */
  executeOperation() {
    if (this.operation) {
      // 前から2つの数値を取り出す
      // TODO: 2項の演算子しか設定できない -> 正負の反転などの単項の処理はこのままではできない
      const lhs = this.stack.shift()!;
      const rhs = this.stack.shift()!;
      console.log("exec:", lhs, rhs);
      this.stack.push(this.operation(lhs, rhs));
    }
  }

  /** 計算処理を設定 */
  setOperation(op: (lhs: number, rhs: number) => number) {
    this.operation = op;
  }

  /** 計算用数値を追加 */
  addStack(value: number) {
    this.stack.push(value);
  }

  /** 計算処理をクリア */
  clear() {
    this.stack = [0];
    this.operation = null;
  }

  result() {
    return this.stack.shift();
  }
}
