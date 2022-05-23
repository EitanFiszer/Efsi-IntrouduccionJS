let validar=false;


let validarNota = (nota,materia) =>{
  
    if(nota>=1 && nota <=10){
        document.getElementById(materia).style.color="green"
        validar=true;
    }else{
        document.getElementById(materia).style.color="red"
        validar=false;
    }
};

let esVacio = ()=>{
    let mate=parseFloat(document.getElementById('notaMate').value);
    let lengua=parseFloat(document.getElementById('notaLengua').value);
    let Efsi=parseFloat(document.getElementById('notaEfsi').value);
    let valores=[mate,lengua,Efsi]
    let vacio=false;
    console.log(valores)
        valores.forEach(nota => {
            if(nota==null || nota=='' || isNaN(nota)){
                vacio=true
            }
        });
        if(vacio){
            alert("Error")
        }
        return vacio;
}



let calcularPromedio = () =>{
    var mate=parseFloat(document.getElementById('notaMate').value);
    var lengua=parseFloat(document.getElementById('notaLengua').value);
    var Efsi=parseFloat(document.getElementById('notaEfsi').value);

    if(!validar){
        document.getElementById('promedio').value="error";
    }
    else{
        var promedio=(parseFloat(mate)+parseFloat(lengua)+ parseFloat(Efsi))/3;
        if(promedio>=6 && promedio<=10){
        document.getElementById("promedio").style.color="green";
        document.getElementById('promedio').value=promedio;
        document.getElementById('imagen').src="../Efsi-IntrouduccionJS/img/aprobar.gif"

    }else{
        document.getElementById("promedio").style.color="red";
        document.getElementById('promedio').value=promedio;
        document.getElementById('imagen').src="../Efsi-IntrouduccionJS/img/desaprobar.gif"
    }
    }
    
    
}


let calcularNotaMasAlta = () =>{
    var mate=parseFloat(document.getElementById('notaMate').value);
    var lengua=parseFloat(document.getElementById('notaLengua').value);
    var Efsi=parseFloat(document.getElementById('notaEfsi').value);

    var notaAlta="";


    
    
    
    var max = Math.max(mate,lengua,Efsi);
        document.getElementById('max').value=max;

    if(validar){
        if(max==mate && max==lengua && max==Efsi){
            notaAlta="Matematica, Lengua y EFSI";
        }else if(max==mate && max==Efsi){
            notaAlta="Matematica y Efis";
        }else if(max==lengua && max==Efsi){
            notaAlta="Lengua y Efsi";
        }else if(max==lengua && max==mate){
            notaAlta="Matematica y Lengua";
        }else if(max==lengua){
            notaAlta="Lengua";
        }else if(max==mate){
            notaAlta="Matematica";
        }else if(max==Efsi){
            notaAlta="Efsi";
        }
    }else{
        alert("Error")
    }
    
    
    
    document.getElementById("max").style.color="blue";
    document.getElementById('max').value=notaAlta;
        
}



