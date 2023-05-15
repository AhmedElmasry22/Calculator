const output=document.querySelector('.display');

function clear1(){
  output.value="0.00";
  console.log(output.value);

}

function evaluate1(){

    console.log(output.value);
    try {
      output.value=eval(output.value);

    } catch (error) {
      output.value="Equation Not Valid"
    }

  
}
function display(text){

  if(output.value=="0.00"){
    output.value="";
  }
  output.value+=text;
}