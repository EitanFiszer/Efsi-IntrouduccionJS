let validar=false;


let validarNota = (nota,materia) =>{
  
    if(nota>=1 && nota <=10){
        document.getElementById(materia).style.color="green"
        validar=false;
    }else{
        document.getElementById(materia).style.color="red"
        validar=true;
    }
}



let calcularPromedio = () =>{
    var mate=document.getElementById('notaMate').value;
    var lengua=document.getElementById('notaLengua').value;
    var Efsi=document.getElementById('notaEfsi').value;

    if(validar){
        document.getElementById('promedio').value="error";
    }
    else{
        var promedio=(parseFloat(mate)+parseFloat(lengua)+ parseFloat(Efsi))/3;
    document.getElementById('promedio').value=promedio;
    }
    
    var max = Math.max(mate,lengua,Efsi);
    document.getElementById('maximo').value=max;
}


  