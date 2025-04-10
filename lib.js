//lib.js ->模組檔案圖書館
/*function echo(msg){
    console.log(msg);
}

function add(n1, n2){
    console.log(n1+n2);
}
//import default 資料
export default{
    echo:echo,
    add:add
};
*/
/*預設：如果使用預設default輸出x，可以用不同名字y輸入; 
let x="hello"
export default x;
//非預設：使用大括號{}輸出與輸入名稱需要相同 
let data=[5, 6, 7];
let obj={x:2, y:8};
export {data, obj};
*/

/*可以同時使用預設與非預設，整合export, import如下
let x="hello"

let data=[5, 6, 7];
let obj={x:2, y:8};
export {x as default, data, obj};

*/

/*應用在數學上*/
let add = function (n1, n2){
    console.log(n1+n2);
};
let multi = function (n1, n2){
    console.log(n1*n2)
};

let math ={add:add, multi:multi}

export default math;
export {add, multi};