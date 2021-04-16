
//Data Information

let subjects = ['CSS', 'HTML', 'JS'];

let students = [
    {
        name: "giorgi",
        points: [33,60,80]
    },
    {
        name: "Levani",
        points: [65,20,60]
    },
    {
        name: "Zura",
        points: [58,45,90]
    },
    {
        name: "Mariami",
        points: [50,80,100]
    },
];

//Variabales init

let thead = document.getElementById('thead');
let tbody = document.getElementById('tbody');
let addContainer = document.getElementById('addContainer');
let addSubject = document.getElementById('addSubject');
let inputContainer = document.getElementById('inputContainer');
let check = true;
let tmp = '';

//Table Head innit in html

function theadInit() {
    let tr = document.createElement('tr');
    for (let i=0; i<subjects.length; i++) {
            tmp += `<th> ${subjects[i]} </th>`
         };
    thead.appendChild(tr);
    tr.innerHTML = `<th>Name</th>`
    tr.innerHTML += tmp;
}

theadInit();

// Table Tbody innit

function tbodyInit() {
    
      for (let i=0; i<students.length; i++) {
          tmp ='';
          let tr = document.createElement('tr');
          let del = document.createElement('span');
          tmp += `<th>
                     ${students[i].name}
                 </th>`
          for (let j=0; j<students[i].points.length; j++) {

              tmp += `
                         <th class="${students[i].points[j] > 50 ? "green" : "red" }">
                              ${students[i].points[j]}
                         </th>
                      `
          } 

         tr.innerHTML = tmp;
         tbody.appendChild(tr);
         del.innerText = 'X';
         tr.appendChild(del)
         del.classList.add('span')
      }
}

tbodyInit();

//binputs innit and  inner html

function inputInit() {
    tmp='';
    for (let i=0; i<subjects.length+1; i++) {
        let input = document.createElement('input');
        input.classList.add('input')
        inputContainer.appendChild(input)
        if (check === true) {
            input.type = 'text';
            check = false;
        }
        else {
            input.type = 'number';
        }
    }
    addSubject.innerHTML = `<button id="sub-btn">Add Sub</button>
                            <input id='subInput' value=""  placeholder="Enter Subject">            
                            `
    tmp = `<button id="btn">Add</Submit>`;
    addContainer.innerHTML += tmp;
}

inputInit();

//add input values in table

function addTable() {
    tmp ='';
    let tr = document.createElement('tr');
    let input = document.querySelectorAll('.input');
    let del = document.createElement('span');
    del.classList.add('span')
    for (let i=0; i<input.length; i++) {
        tmp += `<th class="${input[i].value > 50 ? "green" : "red" }">${input[i].value}</th>`;
    }
    tr.innerHTML += tmp;
    tbody.appendChild(tr)
    del.innerText = 'X';
    del.classList.add('span')
    tr.appendChild(del)
    deleteRow();
}

let btn = document.getElementById('btn');
let subBtn = document.getElementById('sub-btn');
let subInput = document.getElementById('subInput');
let theadTr = document.querySelectorAll('#thead tr')

btn.addEventListener('click', addTable);


// Delete Row

function deleteRow(span) {
        let rows = document.querySelectorAll('#tbody tr');
        let spans = document.querySelectorAll('.span');
    
            for (let i=0; i<spans.length; i++) {
                spans[i].addEventListener('click', () => {
                    tbody.removeChild(rows[i])
                    console.log(rows[i])
                })
            }
}

deleteRow();

//add Subjects

function addSub() {
    subBtn.addEventListener('click', () => {
            subjects.push(subInput.value);
            theadTr[0].innerHTML += `<th>${subInput.value}</th>`;
            inputContainer.innerHTML += `<input class="input" type="text">`;
            console.log(inputContainer)
            subInput.value = "";
    })
}

addSub();

