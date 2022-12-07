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
        super(model,color,memory,brand)
    }
}
class Samsung extends Phone{
    constructor (model,color,memory,brand){
        super(model,color,memory,brand)
    }
}
class Xiaomi extends Phone{
    constructor (model,color,memory,brand){
        super(model,color,memory,brand)
    }
}console.log(new Samsung("A72","white",256,"samsung"))