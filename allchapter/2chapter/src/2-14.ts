interface Product {
    name: string
    price: number
    account: number
}

let p:Product = {
    name: 'vivo',
    price: 4000,
    account: 1
}

interface Product1 extends Product {
    desc: string
}
let p1:Product1 = {
    name: 'vivo',
    price: 4000,
    account: 1,
    desc: ''
}

export {}





export {}