/**
 * 表示更新管理クラス
 */

export class DisplayManager {
  private display: HTMLInputElement;

  constructor(display: HTMLInputElement) {
    this.display = display;
  }

  /**
   * 計算結果をディスプレイに反映させる
   */
  public updateDisplay(value: string): void {
    this.display.value = value;
  }

  /**
   * 表示をリセットする
   */
  public resrtDisplay(): void {
    this.updateDisplay("0");
  }
}
