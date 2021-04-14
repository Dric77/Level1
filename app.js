let students = [
   {
       name: "Giorgi",
       math: 68,
       physics: 60,
       js: 100,
       
   },
   {
       name: "Luka",
       math: 88,
       physics: 50,
       js: 60,
       
   },
   {
       name: "Zura",
       math: 60,
       physics: 35,
       js: 100,
       
   },
];

let tbody = document.getElementById('tbody');
let mathAvrage = 0;
let physicsAvrage = 0;
let jsAvrage = 0;
let Avrage = [];

students.map((student) => {
    mathAvrage = student.math + mathAvrage;
    physicsAvrage = student.physics + physicsAvrage;
    jsAvrage = student.js + jsAvrage;
});

Avrage.push(mathAvrage/students.length,physicsAvrage/students.length,jsAvrage/students.length);

function addtr(arr) {
        for (let i=0; i<arr.length; i++) {
            var row =
              `<tr>
                 <td>${arr[i].name}</td>
                 <td>${arr[i].math}</td>
                 <td>${arr[i].physics}</td>
                 <td>${arr[i].js}</td>
               </tr>`;

               tbody.innerHTML += row;
        }
        
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>Avarage</td>`
        tbody.appendChild(tr);
        for (let j=0; j<Avrage.length; j++) {
            let th = document.createElement('th');
            tr.appendChild(th)
            th.innerText =Math.floor( Avrage[j]);
            if (Avrage[j]<50) {
                th.classList.add('redbg');
            }
            else {
                th.classList.add('greenbg')   
            }
        }
};

addtr(students);