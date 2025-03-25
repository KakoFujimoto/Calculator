"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
var op_command_1 = require("./op-command");
/** コマンド生成時に利用する変数 */
var Context = /** @class */ (function () {
    function Context() {
        this.value = '';
        this.commands = [];
    }
    Context.prototype.getCommands = function () { return __spreadArray([], this.commands, true); };
    Context.prototype.getValue = function () { return this.value; };
    Context.prototype.appendValue = function (v) {
        // 先頭の0は削除
        if (this.value === '0') {
            this.value = '';
        }
        this.value += v;
    };
    /** 数値を設定するコマンドを生成する */
    Context.prototype.addNumberCommand = function () {
        if (this.value) {
            this.addCommand(new op_command_1.NumberCommand(parseInt(this.value, 10)));
            this.value = '';
        }
    };
    /** 処理コマンドを */
    Context.prototype.addCommand = function (command) {
        console.log('addcommand:' + command.name());
        this.commands.push(command);
    };
    return Context;
}());
exports.Context = Context;
