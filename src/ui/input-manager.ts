/**
 * 入力状態管理クラス
 */

export class InputManager {
  private isOperatorPressed: boolean = false;

  /**
   * 演算子が押された状態を設定する
   * @param {boolean} isPressed - 演算子が押されたかどうか
   */
  public setOperatorPressed(isPressed: boolean): void {
    this.isOperatorPressed = isPressed;
  }
}
