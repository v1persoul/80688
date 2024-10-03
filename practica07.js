var lg1 = "Información Personal"
var lg2 = "Ubicación"
var op1 = "Nombre:"
var op2 = "Correo electrónico:"
var op3 = "Dirección:";
var op4 = "Ciudad:";

const formulario1 = document.getElementById("formulario1")
const contForm1 = () => {
    return `
<fieldset class="form-control">
    <legend>${this.lg1}</legend>
    <label for=${this.op1}>${this.op1}</label>
    <input class="form-control" type="text" id=${this.op1} name=${this.op1}>
    <label for=${this.op2}>${this.op2}</label>
    <input class="form-control" type="text" id=${this.op2} name=${this.op2}>
    <legend>${this.lg2}</legend>
    <label for=${this.op3}>${this.op3}</label>
    <input class="form-control" type="text" id=${this.op3} name=${this.op3}>
    <label for=${this.op4}>${this.op4}</label>
    <input class="form-control" type="text" id=${this.op4} name=${this.op4}>
</fieldset>`}

formulario1.innerHTML = contForm1();
