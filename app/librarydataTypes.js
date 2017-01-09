module.exports = function(arg){

    if(typeof arg === "string"){
        return arg.length
    }
    if (arg === null || arg === undefined){
        return "no value "
    }
    if(typeof arg === "boolean") {
        return arg
    } 
    
    if(typeof arg === "number") { 
    if(arg< 100) {
        return "less than 100"
    }
    else if(arg>100){
        return "more than 100"
    }
    else{ 
       return "equal to 100"
    }
    }


    if(typeof arg === "object"){
    if( arg.length > 2){
       return arg[2]
    }
       return undefined
    }
   
   if (typeof arg === "function"){
       return arg(true)

    }
}

