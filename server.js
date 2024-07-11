const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

const students = {
    1: { id: 1, name: 'Alice', sem: 3, cgpa: 3.8 },
    2: { id: 2, name: 'Bob', sem: 2, cgpa: 3.5 },
    3: { id: 3, name: 'Charlie', sem: 4, cgpa: 3.9 },
    4: { id: 4, name: 'David', sem: 1, cgpa: 3.2 },
    5: { id: 5, name: 'Eve', sem: 3, cgpa: 3.7 },
    6: { id: 6, name: 'Frank', sem: 2, cgpa: 3.6 },
    7: { id: 7, name: 'Grace', sem: 4, cgpa: 3.9 },
    8: { id: 8, name: 'Hank', sem: 1, cgpa: 3.1 },
    9: { id: 9, name: 'Ivy', sem: 3, cgpa: 3.8 },
    10: { id: 10, name: 'Jack', sem: 2, cgpa: 3.4 },
};


// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Get all students
app.get('/students', (req, res) => {
    res.json(Object.values(students));
});

// Get student by ID
app.get('/student/:id', (req, res) => {
    const studentId = req.params.id;
    const student = students[studentId];

    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
