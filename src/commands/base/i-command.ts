/**
 * コマンドの基本インターフェース
 */
export interface Command {
    /**
     * コマンドを実行する
     */
    execute():void;
}