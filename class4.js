class Phone{
    constructor(model,color,memory,brand,year){
        this.model=model
        this.color=color
        this.memory=memory
        this.brand=brand
        this.year=year
    }
calcPrice=()=>{
   return Math.round((this.memory*this.year)/2)
}}


class Ipohe extends Phone{
    constructor (model,color,memory,brand,year){
        super(model,color,memory,brand,year)
    }
}
class Samsung extends Phone{
    constructor (model,color,memory,brand,year){
        super(model,color,memory,brand,year)
    }
}
class Xiaomi extends Phone{
    constructor (model,color,memory,brand,year){
        super(model,color,memory,brand,year)
    }}
    let iphone= new Ipohe(11,'red',64,'apple',2019)
    console.log(iphone.calcPrice())