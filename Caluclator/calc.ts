let currentValue: string = "0"; // 初期値の設定
let isOperatorPressed: boolean = false;

// 演算子かどうかを判定する関数
function isOperator(value: string): boolean {
  return ["+", "-", "*", "/"].includes(value);
}

// ディスプレイの値を更新する関数
function setDisplayValue(button: HTMLButtonElement): void {
  const display = document.querySelector(".display") as HTMLInputElement;
  const value = button.getAttribute("data-value")!;

  if (value !== "C" && value !== "=") {
    const lastInput = currentValue.slice(-1);

    // 演算子が入力された場合
    if (isOperator(value)) {
      if (isOperator(lastInput)) {
        // 演算子が連続する場合、直前の演算子を置き換え
        currentValue = currentValue.slice(0, -1);
      }
      // 演算子を入力
      currentValue += value;
      isOperatorPressed = true;
    } else {
      // 数字が入力された場合
      if (isOperatorPressed) {
        // 演算子が押された後に最初に入力された数字は、先頭の0を削除
        if (value === "0" && currentValue.slice(-1) === "0") {
          // 先頭の0が続く場合は削除しない
          return;
        } else {
          currentValue += value;
        }
      } else {
        // 数字が入力された場合、先頭の0を削除して数字をセット
        if (currentValue === "0" && value !== "0") {
          currentValue = value; // 最初の0を削除
        } else if (currentValue !== "0" || value !== "0") {
          currentValue += value; // 0以外の場合、数字を追加
        }
      }
      isOperatorPressed = false;
    }

    // 演算子後に入力された数字が先頭に0を持つ場合、その0を削除
    let displayValue: string = currentValue;
    if (isOperatorPressed) {
      const lastNumber = currentValue.match(/(\d+\.?\d*)$/)?.[0] || "";
      displayValue = lastNumber.replace(/^0+/, "") || "0";
    }

    display.value = displayValue;
  }
}
