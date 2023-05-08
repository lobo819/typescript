// Obejct是除了null和undefined的父类型
let data:Object = 1
data = '2'
data = []
data = new Set()
// object只能写成对象形式
let data2:object = {username:[123]}

// 联合类型
let str:string | number = 12
str = '字符串'

// 交叉类型
type Obj = {username:string}
type Obj1 = {age:number}
let obj:Obj = {username:'旺仔'}
let obj1:Obj1 = {age:23}
let obj3:Obj & Obj1 = {username:'旺仔',age:23}

// 字面量类型

type num = 1 | 2 | 3
let n:num = 2

type params = 0 | 1
function fn (params:params){
    if (params){
        console.log(1111)
    }else {
        console.log(2222)
    }
}
fn(1)

export {}