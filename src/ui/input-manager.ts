import { CommonOperator } from "../commands/op/common-operator";

/**
 * 入力状態管理クラス
 */

export class InputManager {
  private isOperatorPressed: boolean = false;
  private currentValue: string = "0";

  /**
   * 演算子が押されたかどうか
   */
  public setOperatorPressed(isPressed: boolean): void {
    this.isOperatorPressed = isPressed;
  }

  /**
   * 計算結果を設定する
   */
  public setCurrentValue(value: string): void {
    this.currentValue = value;
  }

  /**
   * 計算結果を取得する
   */
  public getCurentValue(): string {
    return this.currentValue;
  }

  /**
   * ユーザー入力の処理
   */
  public execute(value: string): string {
    const lastInput = this.currentValue.slice(-1);

    // 演算子が入力された場合
    if (CommonOperator.isOperator(value)) {
      if (this.currentValue === "0") {
        return this.currentValue; // 数字が入力されていない場合は処理しない
      }
      if (CommonOperator.isOperator(lastInput)) {
        // 最後が演算子の場合、上書き
        this.currentValue = this.currentValue.slice(0, -1);
      }
      this.currentValue += value;
      this.isOperatorPressed = true;
    } else {
      // 数字が入力された場合
      if (this.isOperatorPressed) {
        this.currentValue = value; // 演算子後は新しい数値を設定
        this.isOperatorPressed = false;
      } else {
        this.currentValue =
          this.currentValue === "0" ? value : this.currentValue + value; // 数字を追加
      }
    }
    return this.currentValue; // 更新された計算結果を返す
  }
}
