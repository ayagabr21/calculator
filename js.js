//  Use equal() function to return the result based on passed values.  
function equal(){
    let result=document.calc.txt.value
    if (result){
        document.calc.txt.value=eval(result)
    }
}

// create a backspace() function to remove the last number at the end of the textview
function backspace(){
    let back =document.calc.txt.value
    document.calc.txt.value= back.substring(0,back.length-1);
}