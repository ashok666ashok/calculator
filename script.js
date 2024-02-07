//display the numbers in text box

const btnclick=(num)=>{
    result.value+=num
}

const evaluatexp=()=>{
    let exp=eval(result.value)
    result.value=exp
}
const canceli=()=>{
    result.value=''
}
const reoveLastItem=()=>{
    
    result.value=result.value.slice(0,-1)
    
}