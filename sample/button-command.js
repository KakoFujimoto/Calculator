"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EqualButtonCommand = exports.PlusButtonCommand = exports.NumberButtonCommand = void 0;
var Command = require("./op-command");
/** 数値ボタン押された場合 */
var NumberButtonCommand = /** @class */ (function () {
    function NumberButtonCommand(value) {
        this.value = value;
        if (value < 0 || value > 9) {
            throw '不正な数値';
        }
    }
    NumberButtonCommand.prototype.execute = function (context) {
        context.appendValue(this.value);
    };
    return NumberButtonCommand;
}());
exports.NumberButtonCommand = NumberButtonCommand;
/** 足し算ボタン押された場合 */
var PlusButtonCommand = /** @class */ (function () {
    function PlusButtonCommand() {
    }
    PlusButtonCommand.prototype.execute = function (context) {
        context.addNumberCommand();
        context.addCommand(new Command.PlusCommand());
        new NumberButtonCommand(0).execute(context); // 計算ボタン押されたら0にする？
    };
    return PlusButtonCommand;
}());
exports.PlusButtonCommand = PlusButtonCommand;
/** =が押された */
var EqualButtonCommand = /** @class */ (function () {
    function EqualButtonCommand() {
    }
    EqualButtonCommand.prototype.execute = function (context) {
        context.addNumberCommand();
        context.addCommand(new Command.EqualCommand());
    };
    return EqualButtonCommand;
}());
exports.EqualButtonCommand = EqualButtonCommand;
