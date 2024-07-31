document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const studentTableBody = document.querySelector('#studentTable tbody');

    let students = [];

    studentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const nisn = document.getElementById('nisn').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;

        const student = { name, nisn, address, phone };
        students.push(student);

        addStudentToTable(student);
        studentForm.reset();
    });

    function addStudentToTable(student) {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.nisn}</td>
            <td>${student.address}</td>
            <td>${student.phone}</td>
            <td>
                <button onclick="deleteStudent('${student.nisn}')">Hapus</button>
            </td>
        `;

        studentTableBody.appendChild(row);
    }

    window.deleteStudent = function(nisn) {
        students = students.filter(student => student.nisn !== nisn);
        updateTable();
    };

    function updateTable() {
        studentTableBody.innerHTML = '';
        students.forEach(student => addStudentToTable(student));
    }
});
