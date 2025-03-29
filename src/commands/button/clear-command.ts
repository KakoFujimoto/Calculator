import { Command } from "../base/i-command";
import { DisplayManager } from "../../ui/display-manager";
import { InputManager } from "../../ui/input-manager";

/**
 * クリアボタンのコマンド
 */
export class ClearCommand implements Command {
  private displayManager: DisplayManager;
  private inputManager: InputManager;

  constructor(displayManager: DisplayManager, inputManager: InputManager) {
    this.inputManager = inputManager;
    this.displayManager = displayManager;
  }

  /**
   * 電卓のディスプレイをクリアする
   */
  execute(): void {
    this.inputManager.setCurrentValue("0");
    this.displayManager.resetDisplay();
  }
}
