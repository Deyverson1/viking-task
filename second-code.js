// Codigo de clase sin LocalStorage //Este no esta en uso
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]"); //no va a cambiar en el tiempo por eso usamos const
// Seleccionamos  el boton, ya que deseamos saber en que momento se realiza un click en el boton que inserta una nueva nota
const createTask = ((evento) => { //Creamos una funcion con todo el envento del click
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]"); //seleccionamos el input, parte donde ponemos la nueva tarea basicamente
    const value = input.value;
    const list  = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card"); //con esta propiedad agregamos un style que ya esta en Css a una etiqueta desde java
    input.value = ''; //para que se limpie cada vez que ponemos una descripcion en el input 
    //backticks
    // console.log(checkComplete); //checkComplete es basicamente el icono que no indica que la tarea ya fue realizada
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const tittleTask = document.createElement("span"); //remplazar la estructura del html
    tittleTask.classList.add("task"); 
    tittleTask.innerText = value;
    taskContent.appendChild(tittleTask); //titulo de la tarea 
    taskContent.appendChild(deleteIcon());
    // const content = `
    // <i class="fas fa-trash-alt trashIcon icon"></i>` //extraemos la parte del html en el cual esta la lista del texto
    // Previamente ponemos el valor de la variable para que esta sea remplazada por lo puesto en el input, y despues se pueda devolver al html sin refrescarse
    
    // task.innerHTML = content; //con esta propiedad agregamos html desde java, es agregado en la variable task que a sy vez es la lista que contiene el texto de la lista

    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    console.log(task)


    // console.log("crear tarea") //dentro de la funcio n debemos poner lo que deseamos que pase cuando se detecte que se ha realizado un click en el boton
});  //nombre de la variable donde se encuentra el elemento
// EL .addEventListener("click") 
// Listenerr

//Arrow funtions o funciones anonimas
btn.addEventListener("click", createTask); //para el codigo quede mas limpio, agregamos toda la funcionalidad del envento a una funcion, y solo citando de nuevo la funcion podemos tener el codigo mucho mas limpio.
