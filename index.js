const errorheadingrow = document.getElementById('errorcol');
const errorheadingcol = document.getElementById('error');
const errorheading1 = document.getElementById('errorheading1');
function makeTable(array) {
    var heading = document.getElementById('heading');
    var table = document.getElementById('tab');
    var row = document.getElementById('rows').value;
    var col = document.getElementById('columns').value;
    let trh = document.createElement('tr');
    for (var colIndex = 0; colIndex < col; colIndex++) {
        let th = document.createElement('th');
        th.innerText = array[colIndex];//data
        trh.appendChild(th);
    }
    table.appendChild(trh);
    for (var rowIndex = 0; rowIndex < row; rowIndex++) {
        var tr = document.createElement('tr');
        for (var colIndex = 0; colIndex < col; colIndex++) {
            var td = document.createElement('td');
            let random = Math.floor((Math.random() * 100) + 1);
            var text = document.createTextNode(`${random}`);
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
function makeheading() {
    document.getElementById('heading').innerHTML = "";
    var col = document.getElementById('columns').value;
    let heading = document.getElementById("heading");
    for (let i = 0; i < col; i++) {
        let input = document.createElement("input");
        input.classList.add("head");
        heading.appendChild(input)
    }
    let button = document.createElement('button');
    heading.appendChild(button).innerText = "Click me!";
    button.id = 'clicking';
    button.classList.add("btn", "btn-outline-primary")
    button.addEventListener('click', nnew2);
}
function nnew2() {
    document.getElementById('tab').innerHTML = "";
    let button = document.getElementById('clicking');
    let array = [];
    let input = document.getElementsByClassName('head');
    for (let i = 0; i < input.length; i++) {
        array.push(input[i].value);
    }
    if(validateheading(array)){
        makeTable(array);
    }
}
document.getElementById("make").addEventListener("click", validateRow);
document.getElementById("make").addEventListener("click", validateColumn);
// validation*******************************************
let submit = document.getElementById('make');
submit.addEventListener('click', function () {
    var c1 = validateRow();
    var c2 = validateColumn();
    if (c1 == true && c2 == true) {
        makeheading();
    }
})
function validateRow() {
    var rowv = document.getElementById('rows').value;
    if (rowv > 0 && rowv < 11) {
        errorheadingrow.innerText = "";
        return true;
    } else {
        document.getElementById('heading').innerHTML = "";
        errorheadingrow.innerText = "Enter a number between 1-10";
        return false;
    }
}
function validateColumn() {
    var col = document.getElementById('columns').value;
    if (col > 0 && col < 11) {
        errorheadingcol.innerText = "";
        return true;
    } else {
        document.getElementById('heading').innerHTML = "";
        errorheadingcol.innerText = "Enter a number between 1-10";
        return false;
    }
}
function validateheading(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '') {
            errorheading1.innerText = "Enter the value?";
            return false;
        }else if(new Set(array).size != array.length){
            errorheading1.innerText = "Enter a Unique value";
            return false;

        } 
        else {
            errorheading1.innerText = "";
        }
    }
    return true;
}