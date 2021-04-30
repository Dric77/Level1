let students = [
    {
        name: "Nika",
        points: [55,70,49]
    },
    {
        name: "Mari",
        points: [55,22,100]
    },
    {
        name: "Ana",
        points: [40,51,49]
    },
];

let subjects = ['JS', 'HTML', 'CSS'];



let tmp = '';
let avrage = [];
let thead = document.getElementById('thead');
let tbody = document.getElementById('tbody');
let Inputs = document.getElementById('Inputs');
let addStudent = document.getElementById('addStudent');

class Init {
    constructor (sub) {
        this.sub = sub;
        tmp += `<th>Name</th>`
        sub.map((subj) => {
            tmp += `<th>
                        ${subj}  
                   </th>`
        })

        thead.innerHTML += tmp;
    };

    inputInit(sub) {
        tmp = '';
        for (let i=0; i<this.sub.length; i++) {
            tmp += `<input>`
        }

        Inputs.innerHTML += tmp;
    };

};
class tbodyInit {
    constructor (student) {
        this.student = student;

        student.map((stud) => {
            tmp = '';
            tmp += `<th>
                        ${stud.name}  
                   </th>`;
            stud.points.map((point) => {
                tmp += `<th class=${point>51 ? 'green' : 'red'}>
                        ${point}  
                   </th>`;
            });
            
            tbody.innerHTML += tmp;

        })};

        addRow() {
            console.log("clicked")
        }
}

let head = new Init(subjects);
let body = new tbodyInit(students);

head.inputInit();

let addrow = body.addRow;

function a() {
    console.log('hii')
}

addStudent.addEventListener('click', () => {
    console.log('from event')
})

// class addRoow {
//     constructor()

// }
