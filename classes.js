class Ipohe {
    constructor(model,color,memory,brand){
        this.model=model
        this.color=color
        this.memory=memory
        this.brand=brand
    }
}
class Samung{
    constructor(model,color,memory,brand){
        this.model=model
        this.color=color
        this.memory=memory
        this.brand=brand
    }
}
class Xiaomi{
    constructor(model,color,memory,brand){
        this.model=model
        this.color=color
        this.memory=memory
        this.brand=brand
    }
}
console.log(new Ipohe(11,'red',64,'apple'))



class Phone{
    constructor(model,color,memory,brand){
        this.model=model
        this.color=color
        this.memory=memory
        this.brand=brand
    }
}
class Ipohe extends Phone{
    constructor (model,color,memory,brand){
        super(model,color,memory)
        this.brand=brand
    }
}
class Samsung extends Phone{
    constructor (model,color,memory,brand){
        super(model,color,memory)
        this.brand=brand
    }
}
class Xiaomi extends Phone{
    constructor (model,color,memory,brand){
        super(model,color,memory)
        this.brand=brand
    }
}console.log(new Samsung("A72","white",256,"samsung"))