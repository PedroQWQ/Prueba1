export class OP{

    cargainicial(){
        let alu;
        if(localStorage.getItem("alumnos")===null){
            alu=[];
        }
        else{
            alu=JSON.parse(localStorage.getItem("alumnos"));
        }
    
        const ali=document.createElement("tr");
        alu.forEach(al => {
            al.innerHTML+=`  <td>${al.nombre}</td>
            <td>${al.apellidoP}</td>
            <td>${al.apellidoM}</td>
            <td>${al.cal}</td>
            <td id="bot">
            <a href="#" class="btn-alumno" name="eliminar" id="eliminar">Eliminar</a>
            <a href="#" class="btn-alumno" name="modificar" id="modificar">Modificar</a>
            </td>
            `;    
        });
    
    }
   //mostrar 
     mostrar(aviso){

        const div=document.createElement("div");
        div.className="alerta";
        div.appendChild(document.createTextNode(aviso));

        const mensaje=document.querySelector(".mensaje");
        mensaje.appendChild(div);

        setTimeout(function(){
            document.querySelector(".alerta").remove();
        },3000);
    }
   //agregar trabajador
    agregaAlumno(alumno){
    const listado=document.getElementById("datost");
    const ali=document.createElement("tr");
    const foto=alumno.cal.slice(12);
    ali.innerHTML=`  <td>${alumno.nombre}</td>
                    <td>${alumno.apellidoP}</td>
                    <td>${alumno.apellidoM}</td>
                    <td>${alumno.cal}</td>
                    <td><img src="${foto}" alt="foto"></td>
                    <td id="bot">
                    <a href="#" class="btn-alumno" name="eliminar" id="eliminar">Eliminar</a>
                    <a href="#" class="btn-alumno" name="modificar" id="modificar">Modificar</a>
                    </td>
                    `;

            
    listado.appendChild(ali);
    }

    //eliminar   
    eliminaAlumno(elemento){
        let alu;
        alu=JSON.parse(localStorage.getItem("alumnos"));
          for(let i=0; i<alu.length;i++){
            if(alu[i].nombre==nombre.value){
              temp=alu.slice(0,i);
              temp2=alu.slice(i+1,alu.length);
              alu=temp.concat(temp2);
              break;
            }
        }
          localStorage.setItem("alumnos",JSON.stringify(alu))

        elemento.parentElement.parentElement.remove();
        this.mostrar("Trabajador Eliminado");
    }
    //eliminar
    limpiar(){
        document.getElementById("falumnos").reset();

    }
   //imprimir
    imprimir(elemento){
            let nta = window.open('', 'PRINT', 'height=400,width=600');
            nta.document.write('<html><head><title>' + document.title + '</title>');
            nta.document.write('</head><body >');
            nta.document.write(elemento.innerHTML);
            nta.document.write('</body></html>');
            nta.document.close();
            nta.focus();
            nta.print();
            nta.close();
            return true;
    }
   //modificar
    modifica(elemento){
        let nombre = elemento.parentElement.parentElement.cells[0].innerHTML;
        let apellidoP = elemento.parentElement.parentElement.cells[1].innerHTML;
        let apellidoM = elemento.parentElement.parentElement.cells[2].innerHTML;

        // let cal = elemento.parentElement.parentElement.cells[2].innerHTML;
        document.getElementById("nombre").value=nombre;
        document.getElementById("apellidoP").value=apellidoP;
        document.getElementById("apellidoM").value=apellidoM;
        document.getElementById("listado").disabled=true;
        document.getElementById("guardar").value="Actualizar";
            elemento.parentElement.parentElement.remove();
    }
}