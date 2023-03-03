export const HalfFilter = (current,database)=>{

    let  newCurrent = current
for(let i=0; i<current.length; i++){
    let m = true;
    for(let j=0; j<database.length; j++){

        if(database[j].name===current[i]){
            m = false
        }
    }
    if(m){
        newCurrent =    newCurrent.filter((el)=>{
            return el!==current[i]
        })
    }
}
return newCurrent

}