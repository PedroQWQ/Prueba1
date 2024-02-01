import {Alumno} from './alumno.js';
import {OP} from './op.js';

const op=new OP;
op.cargainicial();

guardar.addEventListener("click",function(e){

    e.preventDefault();
    const op=new OP;
    let nombre=document.getElementById("nombre").value;
    let apellidoP=document.getElementById("apellidoP").value;
    let apellidoM=document.getElementById("apellidoM").value;
    let cal=document.getElementById("cal").value;

    if(nombre==="" || apellidoP==="" || apellidoM==="" || cal===""){
        op.mostrar("Faltan datos del trabajador");
    }
    else{
        const alumno = new Alumno(nombre,apellidoP,apellidoM,cal);
        op.agregaAlumno(alumno);
        op.mostrar("Se agrego el Trabajador");
        op.limpiar();

        let alu;
    if(localStorage.getItem("alumnos")===null){
        alu=[];
    }
    else{
        alu=JSON.parse(localStorage.getItem("alumnos"));
    }

    let a1={
      nombre:nombre,
      apellidoP:apellidoP,
      apellidoM:apellidoM,
      cal:cal,
    };

    alu.push(a1);
    localStorage.setItem("alumnos",JSON.stringify(alu));
    }
    
    op.cargainicial();

});
//eliminar targeta
document.getElementById("listado").addEventListener("click",(e)=>{
    const op=new OP;
    if(e.target.id=="eliminar"){
        op.eliminaAlumno(e.target);
    }

    if(e.target.id=="modificar"){
        op.modifica(e.target);
        op.eliminaAlumno(e.target);
    }

    e.preventDefault();
});
//Imprimir
let impr=document.getElementById("listado");

implp.addEventListener("click",()=>{
    const op=new OP;
    op.imprimir(impr);
});