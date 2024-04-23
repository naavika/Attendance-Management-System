let attendanceData = [
    { id: 1, date: '2024-04-23', status: 'Present' },
    { id: 2, date: '2024-04-24', status: 'Absent' }
];


exports.markAttendance = (req, res) => {
    const { date, status } = req.body;
    const id = attendanceData.length + 1;
    attendanceData.push({ id, date, status });
    res.send('Attendance marked successfully');
};


exports.fetchAttendance = (req, res) => {
    res.json(attendanceData);
};


exports.updateAttendance = (req, res) => {
    const { id } = req.params;
    const { date, status } = req.body;
    const index = attendanceData.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
        attendanceData[index] = { id: parseInt(id), date, status };
        res.send('Attendance updated successfully');
    } else {
        res.status(404).send('Attendance not found');
    }
};


exports.deleteAttendance = (req, res) => {
    const { id } = req.params;
    const index = attendanceData.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
        attendanceData.splice(index, 1);
        res.send('Attendance deleted successfully');
    } else {
        res.status(404).send('Attendance not found');
    }
};
