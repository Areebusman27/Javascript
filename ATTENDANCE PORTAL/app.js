function addStudent() {
    const studentNameInput = document.getElementById('student-name');
    const studentName = studentNameInput.value.trim();
    
    if (studentName === '') {
        alert('Please enter a student name.');
        return;
    }
    
    const tbody = document.querySelector("#attendance-table tbody");
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${studentName}</td>
        <td>
            <select onchange="updateAttendance()">
                <option value="present">Present</option>
                <option value="absent">Absent</option>
                <option value="leave">Leave</option>
            </select>
        </td>
    `;
    
    tbody.appendChild(newRow);
    studentNameInput.value = '';
    
    updateAttendance();
}

function updateAttendance() {
    const tbody = document.querySelector("#attendance-table tbody");
    const rows = tbody.getElementsByTagName("tr");
    let presentCount = 0;
    let absentCount = 0;
    let leaveCount = 0;

    for (let i = 0; i < rows.length; i++) {
        const select = rows[i].getElementsByTagName("select")[0];
        if (select.value === "present") {
            presentCount++;
        } else if (select.value === "absent") {
            absentCount++;
        } else if (select.value === "leave") {
            leaveCount++;
        }
    }

    document.getElementById("present-count").textContent = presentCount;
    document.getElementById("absent-count").textContent = absentCount;
    document.getElementById("leave-count").textContent = leaveCount;
}
