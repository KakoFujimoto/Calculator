/**
 * 電卓クラス
 * ユーザーが入力した値を保持し、計算結果を表示する
 */

export class Calculator {
  private currentValue: string = "0"; // 現在の計算結果
  private isOperatorPressed: boolean = false; // 演算子が押されたかどうか
  private display: HTMLInputElement; // 表示用

  /**
   * コンストラクタ
   * @param {HTMLInputElement} display - 計算結果を表示するためのHTML
   */
  constructor(display: HTMLInputElement) {
    this.display = display;
  }

  /**
   * 現在の計算結果を取得する
   * @returns {string} 現在の計算結果
   */
  public getCurrentValue(): string {
    return this.currentValue;
  }

  /**
   * 現在の値を設定し、表示を更新する
   * @param {string} value - 新しく設定する計算結果
   */
  public setValue(value: string): void {
    this.currentValue = value;
    this.updateDisplay();
  }

  /**
   * 与えられた値が演算子かどうかを判定する
   *  @param {string} value - 判定する値
   *  @returns {boolean} 演算子であれば true
   */
  private isOperator(value: string): boolean {
    return ["+", "-", "*", "/"].includes(value);
  }

  /**
   * 計算結果をリセットし、ディスプレイを初期化する
   */
  public clear(): void {
    this.currentValue = "0";
    this.isOperatorPressed = false;
    this.updateDisplay();
  }

  /**
   * 演算子が押された状態を設定する
   * @param {boolean} isPressed - 演算子が押されたかどうか
   */
  public setOperatorPressed(isPressed: boolean): void {
    this.isOperatorPressed = isPressed;
  }

  /**
   * 計算結果をディスプレイに反映させる
   */
  public updateDisplay(): void {
    console.log(`ディスプレイ更新：${this.currentValue}`);
    this.display.value = this.currentValue;
  }

  /**
   * ユーザー入力の処理
   * @param {string} value - 追加する値(数字や演算子)
   */
  public execute(value: string): void {
    const lastInput = this.currentValue.slice(-1);
    console.log(`入力値：${value}, 最後の入力：${lastInput}`);

    const actions: Record<string, (value:string) => void> = {
      "operator": (value:string) => {
        if (!this.isOperatorPressed) {
            if (this.currentValue === "0"){
                this.currentValue = "0";
            }
        }
        this.isOperatorPressed = true;
        if(!this.isOperator(lastInput)){
            this.currentValue += value;
        }
      },
      "number": (value:string) => {
        if (this.isOperatorPressed) {
          this.currentValue = value;
          this.isOperatorPressed = false;
        } else {
            if(this.currentValue === "0"){
                this.currentValue = value;
            } else {
                this.currentValue += value;
            }
        }
      }
    };

    if (this.isOperator(value)) {
      actions["operator"](value);
    } else {
      actions["number"](value);
    }
    this.updateDisplay();
  }
}