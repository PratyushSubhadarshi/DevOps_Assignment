const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

const students = {
    1: { id: 1, name: 'Alice', sem: 3, cgpa: 3.8 },
    2: { id: 2, name: 'Bob', sem: 2, cgpa: 3.5 },
    3: { id: 3, name: 'Charlie', sem: 4, cgpa: 3.9 },
    // Add more students as needed
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
