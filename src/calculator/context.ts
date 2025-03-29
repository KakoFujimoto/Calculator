import { CommonOperator } from "../commands/op/common-operator";
import { DisplayManager } from "../ui/display-manager";

/**
 * 計算状態管理クラス
 */

export class Calculator {
  private currentValue: string = "0"; // 現在の計算結果
  private isOperatorPressed: boolean = false;
  private displayManager: DisplayManager;

  constructor(display: HTMLInputElement) {
    this.displayManager = new DisplayManager(display);
  }

  /**
   * 現在の計算結果を取得する
   */
  public getCurrentValue(): string {
    return this.currentValue;
  }

  /**
   * 現在の値を設定する
   */
  public setValue(value: string): void {
    this.currentValue = value;
    this.displayManager.updateDisplay(value);
  }

  /**
   * 計算結果をリセットする
   */
  public clear(): void {
    this.currentValue = "0";
    this.isOperatorPressed = false;
    this.displayManager.resetDisplay();
  }

  /**
   * ユーザー入力の処理
   */
  public execute(value: string): void {
    const lastInput = this.currentValue.slice(-1);
    console.log(`入力値：${value}, 最後の入力：${lastInput}`);

    const actions: Record<string, (value: string) => void> = {
      operator: (value: string) => {
        if (this.currentValue === "0") {
          return;
        }
        if (CommonOperator.isOperator(lastInput)) {
          this.currentValue = this.currentValue.slice(0, -1);
        }
        //this.currentValue += value;
        this.isOperatorPressed = true;
      },
      number: (value: string) => {
        if (this.isOperatorPressed) {
          this.currentValue = value;
          this.isOperatorPressed = false;
        } else {
          this.currentValue =
            this.currentValue === "0" ? value : this.currentValue + value;
        }
      },
    };

    if (CommonOperator.isOperator(value)) {
      actions["operator"](value);
    } else {
      actions["number"](value);
    }
    if (!CommonOperator.isOperator(value)) {
      this.displayManager.updateDisplay(this.currentValue);
    }
  }
}
