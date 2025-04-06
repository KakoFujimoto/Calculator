【共通】
コンパイル
npx tsc

【デバッグをブラウザでする場合】
npx http-server -e js .
tsconfigのmoduleはES6とかにする


【CLI上】
npx ts-node .\src\ (対象のファイル.tsc)
tsconfigのmoduleはcommonjsにする
