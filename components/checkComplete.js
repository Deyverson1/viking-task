
const checkComplete = () => {
    const i = document.createElement("i")
    i.classList.add("far","fa-check-square","icon" )
    i.addEventListener("click", completeTask); //Todo debe estar bien escrito, ya que una sola palabra mal evitara un buen funcionamiento
    return i;
}
// Inmediately invoked funtion expressions IIFE
const completeTask = (event) => {
    const element = event.target;
    // El toggle sirve para generar el poder poner y quitar, lo que hace es que identifica si ya esta puesto, si lo esta lo quita, si no lo esta lo pone 
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");

};

export default checkComplete