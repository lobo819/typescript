// never类型 避免未来扩展新的类型没有对应类型的实现
type Type = string | number
function fn(data:Type){
    if(typeof data === 'string'){
        console.log(111111)
    }else if(typeof data === 'number'){
        console.log(2222222222)
    }else {
        let a = data
        console.log(3333)
    }
}

export {}