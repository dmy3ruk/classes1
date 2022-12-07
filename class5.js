class Phone{
    constructor(model,color,memory,brand){
        this.model=model
        this.color=color
        this.memory=memory
        this.brand=brand
    }

get model(){
    this._model=model
}set model(model){
    this._model=11
}

get color(){
    this._color=color
}set color(color){
    this._color='light purple'
}

get memory(){
    this._memory=memory
}set memory(memory){
    this._memory=128
}

get brand(){
    this._brand=brand
}set brand(brand){
    this._brand='Apple'
}
}
let phone=new Phone
console.log(phone)