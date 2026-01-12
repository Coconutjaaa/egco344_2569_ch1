
//test commit
const express = require('express');

const app = express();

app.use(express.json());

// Mock student data
const students = [
    {
        id: 'ENG001',
        name: 'John Smith',
        department: 'Computer Science',
        gpa: 3.85
    },
    {
        id: 'ENG002',
        name: 'Sarah Johnson',
        department: 'Computer Science',
        gpa: 3.92
    },
    {
        id: 'ENG003',
        name: 'Mike Davis',
        department: 'Electrical Engineering',
        gpa: 3.65
    },
    {
        id: 'ENG004',
        name: 'Emily Chen',
        department: 'Electrical Engineering',
        gpa: 3.78
    },
    {
        id: 'ENG005',
        name: 'Alex Rodriguez',
        department: 'Civil Engineering',
        gpa: 3.72
    },
    {
        id: 'ENG006',
        name: 'Lisa Anderson',
        department: 'Civil Engineering',
        gpa: 3.88
    },
    {
        id: 'ENG007',
        name: 'Tom Wilson',
        department: 'Mechanical Engineering',
        gpa: 3.56
    },
    {
        id: 'ENG008',
        name: 'Jessica Lee',
        department: 'Mechanical Engineering',
        gpa: 3.81
    }
];

// API to get all students GPA
app.get('/api/students/gpa', (req, res) => {
    const departmentGPA = {};
    
    students.forEach(student => {
        if (!departmentGPA[student.department]) {
            departmentGPA[student.department] = [];
        }
        departmentGPA[student.department].push({
            id: student.id,
            name: student.name,
            gpa: student.gpa
        });
    });

    res.json(departmentGPA);
});

// API to get individual student GPA by student ID
app.get('/api/students/:studentId/gpa', (req, res) => {
    const student = students.find(s => s.id === req.params.studentId);
    
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    res.json({
        id: student.id,
        name: student.name,
        department: student.department,
        gpa: student.gpa
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});