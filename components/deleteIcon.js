const deleteIcon =  () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i; //siempre en este tipo de debe retornar para poder llamar la funcion
}

const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
}

export default deleteIcon