import { DisplayManager } from "../ui/display-manager";
import { InputManager } from "../ui/input-manager";
import { ClearCommand } from "../commands/button/clear-command";

/**
 * 計算状態管理クラス
 */

export class Calculator {
  private displayManager: DisplayManager;
  private inputManager: InputManager;
  private clearCommand: ClearCommand;

  constructor(display: HTMLInputElement) {
    this.displayManager = new DisplayManager(display);
    this.inputManager = new InputManager();
    this.clearCommand = new ClearCommand(
      this.inputManager,
      this.displayManager
    );
  }

  /**
   * 現在の計算結果を取得する
   */
  public getCurrentValue(): string {
    return this.inputManager.getCurentValue();
  }

  /**
   * 現在の値を設定する
   */
  public setValue(value: string): void {
    this.inputManager.setCurrentValue(value);
    this.displayManager.updateDisplay(value);
  }

  /**
   * 計算結果をリセットする
   */
  public clear(): void {
    this.clearCommand.execute();
  }

  /**
   * ユーザー入力の処理
   */
  public execute(value: string): void {
    const updateValue = this.inputManager.execute(value);
    this.displayManager.updateDisplay(updateValue);
  }
}
