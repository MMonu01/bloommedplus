
export const HandleFilter  = (current,setCurrent,e)=>{

    let x = current

if(x.includes(e.target.value)){
   x = x.filter((el)=>{
      return el!==e.target.value
   })
}
else{
   x = [...x,e.target.value]
}
setCurrent(x)

}