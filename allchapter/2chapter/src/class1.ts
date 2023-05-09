class People {
    name:string
    age:number
    address:string
    constructor(name:string,age:number,address:string) {
        this.name = name
        this.age = age
        this.address = address
    }
    doEat(who:string,where:string){
        console.log(`${who}${where}`)
    }
}

const dataProp = Object.getOwnPropertyDescriptor(People.prototype,'doEat')
dataProp!.value = (...arg:any[]) => {
    console.log(arg)
}



export {}