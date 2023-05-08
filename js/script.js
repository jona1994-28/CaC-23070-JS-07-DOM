const tareas = [];

//TOMAMOS LOS DATOS DEL FORMULARIO, GENERAR UN OBJETO NUEVO(PUSH) Y GUARDARLO EN EL LOCALSTRORAGE
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); //Prevenir que el formulario no se envie
    //Tenemos el contro del formulario

    const inputText = document.querySelector('#text');
    tareas.push({   //Creo un objeto
        id: Date.now(), //Fecha
        text: inputText.value,
        complete: false
    });

    localStorage.setItem("tareas", JSON.stringify(tareas)); //En localStorage estoy guardando clave y valor

    inputText.value = ""; //Limpio el formulario
    console.log(tareas);
});

