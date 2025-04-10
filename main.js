//main.js ->主程式檔案
//import 資料 from 模組檔案的路徑

/*import lib from "./lib.js";
console.log(lib);
lib.echo("Want some dezzert");
lib.add(8, 9);*/

//預設：如果使用預設default輸出x，可以用不同名字y輸入; 

/*import xyz from "./lib.js";
console.log(xyz);

非預設：使用大括號{}輸出與輸入名稱需要相同 

import {data, obj} from "./lib.js";
console.log(data);
console.log(obj);
*/

/*可以同時使用預設與非預設，整合export, import如下

import xyz, {data, obj} from "./lib.js";
console.log(xyz);
console.log(data);
console.log(obj);

*/

/*應用在數學

import {multi} from "./lib.js";
multi(3, 5);
multi(-20, 196)
*/

import math from "./lib.js";
math.add(3, 9);
math.multi(21, 96);
math.multi(72, 9);
