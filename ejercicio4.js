/*Este ejercicio consiste en convertir las expresiones camelCase en expresiones normales, con espacios:

"camelCase"    => "camel Case"

"setIsLoading" => "set Is Loading"
*/

const string = "setIsLoading"


function camelCase(string) {

    const stringArray = string.split("") 

    const upper = string.toUpperCase()
    
    const upperArray = upper.split("")

    const newWord = []

    for(let i = 0; i < string.length; i++){
        if(stringArray[i] !== upperArray[i]){
         newWord.push(stringArray[i])
    }else{
        newWord.push(upperArray)
    }
}
return newWord
}
  console.log(camelCase(string))