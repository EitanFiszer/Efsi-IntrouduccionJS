function CheckInputsbyInput() {
    let nota=document.getElementsByTagName("input");
    if(nota>=1 && nota <=10){
        document.getElementsByTagName("input").style.color="green"
        return true;
    }else{
        document.getElementsByTagName("input").style.color="red"
        return false;
    }
  }
 

  