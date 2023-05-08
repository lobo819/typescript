// any unknown

let num:number = 3
let data:any = num
let data1:any = '124'
let num1:number = data1

let data2:unknown = '123'
// let str:string = data2 不能赋值
let obj:Object = 1
let obj1:any = 1
// obj.a = 2 报错
// obj1.a = 2 不报错

export {}