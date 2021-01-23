import { ONE, TWO as ZWEI } from './constants.js';
// ONE はその名前のままインポート。
// TWO は変数名をインポート時に ZWEI へ変更。

export const plus = (n, m = ONE) => n + m;
const times = (n, m = ZWEI) => n * m;

export default times;
// 名前なしエクスポート
// 読み込み側で任意の名前をつけられる。
// １モジュールにつき１つ。
