function multiTable(number) {
  let str =""
  for(let i = 1; i<11; i++){
    str += i + " * " + number + " = " + number*i 
    if(i !== 10){
      str += "\n"
    }
  }
  return str
}