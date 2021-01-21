// P82
// 前半はオブジェクトの中身を動的に設定したいときに役立つ構文。
// オブジェクトプロパティのキ ー名や値を任意の変数から展開する方法

const key = 'bar';
const baz = 65536;
const obj1 = { foo: 256, [key]: 4096, baz: baz };
console.log(obj1);

const obj2 = { baz };
console.log(obj2);
