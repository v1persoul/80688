const app = document.getElementById("app")
const Formulario = (parametro) => {
    return `
         <fieldset>
            <legend>${parametro.id}</legend>
            <label for="${parametro.label}">${parametro.label}</label><br>
            <input type="text" id="${parametro.label}" name="${parametro.label}"><br>
            <label for="${parametro.label2}">${parametro.label2}</label><br>
            <input type="text" id="${parametro.label2}" name="${parametro.label2}"><br><br>

        </fieldset>
          `
}

app.innerHTML=Formulario({id:"Informacion personal", label:"Nombre", label2:"Correo electronico"})
app.innerHTML+=Formulario({id:"Informacion de dirección", label:"Dirección", label2:"Ciudad"})