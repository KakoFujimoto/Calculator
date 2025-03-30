import * as Button from "./button-command";
import { CommandBuilder } from "./command-builder";
import { Calculator } from "./calculator";

//
// コマンドをinterfaceとそのimplementsとして実装することで、
// 処理する場合は配列などにまとめて一律のものとして処理できる
//  → ifなどの分岐がなくなる。
//    条件判定が少ないと不具合が起きにくくなる
//
// Commandパターンでは、各処理を各コマンドクラスの処理として記述するので、
// 他のコマンドに対する影響が少なくなる (=疎結合)
//  → 足し算の処理の修正で掛け算の処理がおかしくなる、等が起きにくくなる
//

/** 計算処理のサンプル */
function sample1() {
  // 12 + 31 =
  const uicommands = [
    new Button.NumberButtonCommand(1),
    new Button.NumberButtonCommand(2),

    new Button.PlusButtonCommand(),

    new Button.NumberButtonCommand(3),
    new Button.NumberButtonCommand(1),

    new Button.EqualButtonCommand(),
  ];

  // ボタン押されたコマンドから計算処理するコマンドへ変換
  const builder = new CommandBuilder();
  const opcommands = builder.buildCommand(uicommands);

  // 計算処理
  const calc = new Calculator();
  const result = calc.execute(opcommands);

  // 結果
  console.log(result);

  /*
  addcommand:NumberCommand(12)
  addcommand:PlusCommand
  addcommand:NumberCommand(31)
  addcommand:EqualCommand
  exec: 12 31
  43
  */
}

/** 画面に表示する数値のサンプル */
function sample2() {
  const uicommands: Button.IButtonCommand[] = [];

  function display(logmessage: string) {
    const builder = new CommandBuilder();
    const display = builder.buildDisplayCommand(uicommands);
    console.log("display:", logmessage, "→", display);
  }

  // 12
  uicommands.push(new Button.NumberButtonCommand(1));
  uicommands.push(new Button.NumberButtonCommand(2));
  display("12");

  // +
  uicommands.push(new Button.PlusButtonCommand());
  display("12 +");

  // 31
  uicommands.push(new Button.NumberButtonCommand(3));
  uicommands.push(new Button.NumberButtonCommand(1));
  display("12 + 31");

  // =
  uicommands.push(new Button.EqualButtonCommand());
  display("12 + 31 =");

  /*
  display: 12 → 12
  addcommand:NumberCommand(12)
  addcommand:PlusCommand
  display: 12 + → 0
  addcommand:NumberCommand(12)
  addcommand:PlusCommand
  display: 12 + 31 → 31
  addcommand:NumberCommand(12)
  addcommand:PlusCommand
  addcommand:NumberCommand(31)
  addcommand:EqualCommand
  display: 12 + 31 = → 
  */
}

function sample3() {
  // 1 - 1 =
  const uicommands = [
    new Button.NumberButtonCommand(1),
    new Button.MinusButtonCommand(),
    new Button.NumberButtonCommand(1),
    new Button.EqualButtonCommand(),
  ];

  const builder = new CommandBuilder();
  const opcommands = builder.buildCommand(uicommands);

  const calc = new Calculator();
  const result = calc.execute(opcommands);

  console.log("1-1=" + result);
}

function sample4() {
  // 10 * 2 =
  const uicommands = [
    new Button.NumberButtonCommand(1),
    new Button.NumberButtonCommand(0),
    new Button.MultiplyButtonCommand(),
    new Button.NumberButtonCommand(2),
    new Button.EqualButtonCommand(),
  ];

  const builder = new CommandBuilder();
  const opcommands = builder.buildCommand(uicommands);

  const calc = new Calculator();
  const result = calc.execute(opcommands);

  console.log("10*2=" + result);
}

console.log("-- sample1 --");
sample1();

console.log("-- sample2 --");
sample2();

console.log("-- sample3 --");
sample3();

console.log("-- sample3 --");
sample4();
