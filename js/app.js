let form = document.getElementById('formulario');
let table = document.getElementById('table-info');

const data = {
    name:'',
    lastname:'',
    dni:''
};

form.addEventListener('submit',(e)=>{
    console.log(e);
    e.preventDefault();

    data.name = document.getElementById('name').value;
    data.lastname = document.getElementById('lastname').value;
    data.dni = document.getElementById('dni').value;

    console.log(data);

    table.children[0].innerHTML += (`
        <tr>
            <td>${data.dni}</td>
            <td>${data.name}</td>
            <td>${data.lastname}</td>
        </tr>
    `);

    form.reset();

});


