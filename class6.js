
function creatNewClass(model,color,memory,year,brand){
 class phone{
    constructor(model,color,memory,year,brand){
        this.model=model
        this.color=color
        this.memory=memory
        this.year=year
        this.brand=brand
    }}
 return new phone(model,color,memory,year,brand)
}console.log(creatNewClass(14,'red',64,2019,'apple'))
