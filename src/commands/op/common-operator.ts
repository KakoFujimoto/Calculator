import { Calculator } from "../../calculator/context";

/**
 * 演算子適用の共通クラス
 */
export class CommonOperator {
  private calculator: Calculator;

  constructor(calculator: Calculator) {
    this.calculator = calculator;
  }

  //　使用可能な演算子一覧
  private static readonly OPERATORS: string[] = ["+", "-", "*", "/"];

  /**
   * 与えられた値が演算子かどうかを判定する
   */
  static isOperator(value: string): boolean {
    return CommonOperator.OPERATORS.includes(value);
  }

  /**
   * 指定した演算子を現在の数式に追加する
   */
  applyOperator(operator: string): void {
    const currentExpression = this.calculator.getCurrentValue();
    if (!currentExpression) return;

    this.calculator.setValue(currentExpression + operator);
  }

  /**
   * 計算結果を設定する
   */
  setValue(value: string): void {
    this.calculator.setValue(value);
  }
}
