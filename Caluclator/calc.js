"use strict";

let currentValue = ""; // 現在の数式
let lastOperator = null; // 最後に押された演算子
let isOperatorPressed = false; // 演算子が押されたかどうかを判定するフラグ

// 演算子かどうかを判定する関数
function isOperator(value) {
  return ["+", "-", "*", "/"].includes(value);
}

// ディスプレイの値を更新する関数
function setDisplayValue(button) {
  const display = document.querySelector(".display");
  const value = button.getAttribute("data-value");

  if (value !== "C" && value !== "=") {
    // 数字または演算子が入力された場合
    const lastInput = currentValue.slice(-1);

    // 演算子が入力された場合
    if (isOperator(value)) {
      if (isOperator(lastInput)) {
        // 演算子が連続する場合、直前の演算子を置き換え
        currentValue = currentValue.slice(0, -1);
      }
      // 演算子を入力する
      currentValue += value;
      isOperatorPressed = true; // 演算子が押されたことを記録
    } else {
      // 数字が入力された場合
      currentValue += value;
      isOperatorPressed = false; // 演算子が押された後に数字を入力したらフラグをリセット
    }

    // 演算子を入力した場合は演算子を表示しない
    if (isOperatorPressed) {
      display.value = currentValue.slice(0, -1); // 演算子を一時的に表示しない
    } else {
      // 現在の数式の末尾の数値を表示
      display.value = currentValue.match(/(\d+\.?\d*)$/)?.[0] || "";
    }
  }
}

// 計算結果を求める関数
function executeCalculation() {
  const display = document.querySelector(".display");
  try {
    let expression = currentValue;

    // 数式を分解
    const numbers = expression.split(/[\+\-\*\/]/).map(Number);
    const operators = expression.split(/\d+/).filter(Boolean);

    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const number = numbers[i + 1];

      if (operator === "+") {
        result += number;
      } else if (operator === "-") {
        result -= number;
      } else if (operator === "*") {
        result *= number;
      } else if (operator === "/") {
        if (number === 0) {
          display.value = "Error";
          currentValue = "";
          return;
        }
        result /= number;
      }
    }
    display.value = result;
    currentValue = result.toString();
  } catch (error) {
    display.value = "Error";
    currentValue = "";
  }
}

// クリアする関数
function clearDisplay() {
  document.querySelector(".display").value = "";
  currentValue = "";
  lastOperator = null;
  isOperatorPressed = false;
}

// ボタンにイベントリスナーを追加
document.querySelectorAll(".calc-btn, .calc-operator").forEach((button) => {
  button.addEventListener("click", () => setDisplayValue(button));
});

document.querySelector(".calc-clear").addEventListener("click", clearDisplay);
document
  .querySelector(".calc-equal")
  .addEventListener("click", executeCalculation);
