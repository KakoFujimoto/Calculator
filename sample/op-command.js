"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EqualCommand = exports.PlusCommand = exports.NumberCommand = void 0;
/** 数値を設定するコマンド */
var NumberCommand = /** @class */ (function () {
    function NumberCommand(value) {
        this.value = value;
    }
    NumberCommand.prototype.execute = function (context) {
        // 自分の数値をスタックに乗せる
        context.addStack(this.value);
    };
    NumberCommand.prototype.name = function () { return 'NumberCommand(' + this.value + ')'; };
    return NumberCommand;
}());
exports.NumberCommand = NumberCommand;
/** 足し算 */
var PlusCommand = /** @class */ (function () {
    function PlusCommand() {
    }
    PlusCommand.prototype.execute = function (context) {
        // 前回設定されている計算を行う
        context.executeOperation();
        // 計算処理を設定
        context.setOperation(function (lhs, rhs) { return lhs + rhs; });
    };
    PlusCommand.prototype.name = function () { return 'PlusCommand'; };
    return PlusCommand;
}());
exports.PlusCommand = PlusCommand;
/** 計算する */
var EqualCommand = /** @class */ (function () {
    function EqualCommand() {
    }
    EqualCommand.prototype.execute = function (context) {
        context.executeOperation();
    };
    EqualCommand.prototype.name = function () { return 'EqualCommand'; };
    return EqualCommand;
}());
exports.EqualCommand = EqualCommand;
