let studentData = [
    { id: 1, name: 'John Doe', rollNumber: 'A001' },
    { id: 2, name: 'Jane Smith', rollNumber: 'A002' }
];


exports.getStudentDetails = (req, res) => {
    const { rollNumber } = req.params;
    const student = studentData.find(student => student.rollNumber === rollNumber);
    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
};
