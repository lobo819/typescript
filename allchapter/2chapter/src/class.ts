
class People {
    name:string
    _age:number = 23
    address:string
    static count:number = 0
    constructor(name:string,address:string) {
        this.name = name
        this.address =address
        People.count ++
    }
    set age(val:number){
        if (val > 200){
            throw new Error('你是神仙呐')
        }else {
            this._age = val
        }

    }
    get age(){
        return this._age
    }
    doEat(){

    }
}

let p = new People('旺仔','西乡塘')
p.age = 100

// 静态成员用法，集中管理
class DateUtils {
    static formatDate(a:string){
        return a
    }
    static diffDateByDay(){}

}

const a =  DateUtils.formatDate('aa')

// 单例模式1

class DateUtils1 {
    static dateUtils = new DateUtils1()
    private constructor() {
    }
    formatDate(a:string){
        return a
    }
      diffDateByDay(){}

}

const b = DateUtils1.dateUtils.formatDate('a')


class DateUtils2 {
    static dateUtils:DateUtils2
    static getInstance(){
        if (!this.dateUtils){
            this.dateUtils = new DateUtils2()
        }
        return this.dateUtils
    }
    private constructor() {
        console.log(11111)
    }
    formatDate(a:string){
        return a
    }
    diffDateByDay(){}

}
DateUtils2.getInstance()











export {}